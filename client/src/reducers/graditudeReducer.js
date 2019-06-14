

import {
  FETCH_GRADITUDE,
  FETCH_GRADITUDES,
  CREATE_GRADITUDE,
  EDIT_GRADITUDE,
  DELETE_GRADITUDE
} from '../actions/types'


export default (state = {}, action) => {
  const _ = require('lodash');

  switch (action.type){
    case FETCH_GRADITUDES:
      return { ...state, ..._.mapKeys(action.payload, 'id')}

    case FETCH_GRADITUDE:
      return { ...state, [action.payload.id]: action.payload }

    case CREATE_GRADITUDE:
      return { ...state, [action.payload.id]: action.payload }

    case EDIT_GRADITUDE:
      return { ...state, [action.payload.id]: action.payload}

    case DELETE_GRADITUDE:
      return _.omit(state, action.payload)

    default:
      return state
  }
}
