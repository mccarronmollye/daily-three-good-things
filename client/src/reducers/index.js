import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import graditudeReducer from './graditudeReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  graditudes: graditudeReducer
})
