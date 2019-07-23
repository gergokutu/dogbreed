import {GET_BREEDS} from '../actions/dogList'

const reducer = (state =[], action = {}) => {
  switch (action.type) {
  case GET_BREEDS:
    return action.payload
    default:
    return state
  }
}

export default reducer