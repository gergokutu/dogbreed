// step five
import {GET_BREED_IMAGES} from '../actions/dogBreedImages'

const reducer = (state =[], action = {}) => {
  // console.log("I like cheese")
  // console.log(state, action)
  switch (action.type) {
  case GET_BREED_IMAGES:
    // return part should be adjusted
    return action.payload
    default:
    return state
  }
}

export default reducer
// go back to the container » DogBreedImagesContainer