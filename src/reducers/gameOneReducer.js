import { GET_RANDOM_IMAGE } from '../actions/randomPicture'
import { GET_TWO_BREEDS } from '../actions/randomTwoDogs'

const reducer = (state = { picture:[], breeds: [] }, action = {}) => {
  switch (action.type) {
    case GET_RANDOM_IMAGE:
      return { ...state, picture: action.payload }
    case GET_TWO_BREEDS:
      return {...state, breeds: action.payload }
    default:
      return state
  }
}

export default reducer