import { GET_BREED_IMAGES } from '../actions/dogBreedImages'

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_BREED_IMAGES:
      return action.payload
    default:
      return state
  }
}

export default reducer
