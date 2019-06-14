import graditudes from '../apis/graditudes'
import history from '../history'
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_GRADITUDE,
  FETCH_GRADITUDES,
  FETCH_GRADITUDE,
  DELETE_GRADITUDE,
  EDIT_GRADITUDE
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createGraditude = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await graditudes.post('/graditudes', { ...formValues, userId})

  dispatch({ type: CREATE_GRADITUDE, payload: response.data })
  history.push('/');
  }

export const fetchGraditudes = () => async dispatch => {
  const response = await graditudes.get('/graditudes')

  dispatch({ type: FETCH_GRADITUDES, payload: response.data })
}

export const fetchGraditude = (id) => async dispatch => {
  const response = await graditudes.get(`graditudes/${id}`)

  dispatch({ type: FETCH_GRADITUDE, payload: response.data})
}

export const editGraditude = (id, formValues) => async dispatch => {
  const response = await graditudes.patch(`/graditudes/${id}`, formValues)

  dispatch({ type: EDIT_GRADITUDE, payload: response.data})
  history.push('/')
}

export const deleteGraditude = (id) => async dispatch =>{
  await graditudes.delete(`/graditudes/${id}`)

  dispatch({ type: DELETE_GRADITUDE, payload: id})
  history.push('/')
}
