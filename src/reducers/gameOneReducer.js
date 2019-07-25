import { GET_RANDOM_IMAGE } from '../actions/randomPicture'
import { GET_TWO_BREEDS } from '../actions/randomTwoDogs'
// const reducer = (state = [], action = {})...
// ...has to be changed because of changing the payload
// it is not an empty array anymore, but...
// ...{ picture:[], breeds: [] }
const reducer = (state = { picture:[], breeds: [] }, action = {}) => {

  switch (action.type) {
    case GET_RANDOM_IMAGE:
      // copy the state (we need it), and add the image (url)
      return { ...state, picture: action.payload }
    case GET_TWO_BREEDS:
      // copy the state (we need it), and add the 2 random breed names
      return {...state, breeds: action.payload }
    default:
      return state
  }
}

export default reducer