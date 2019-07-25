// step five
import {GET_RIGHT_IMAGE} from '../actions/getRightImage'

const reducer = (state =[], action = {}) => {
 
  switch (action.type) {
  case GET_RIGHT_IMAGE:
    return action.payload
    default:
    return state
  }
}
export default reducer
