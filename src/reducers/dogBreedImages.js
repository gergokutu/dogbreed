// step five
import {GET_BREED_PICTURES} from '../actions/dogList'

const reducer = (state =[], action = {}) => {
  switch (action.type) {
  case GET_BREED_PICTURES:
    // return part should be adjusted
    return action.payload
    default:
    return state
  }
}

export default reducer
// go back to the container » DogBreedImagesContainer