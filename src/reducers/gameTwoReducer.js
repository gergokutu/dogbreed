import { GET_BREED_NAMES} from '../actions/gameTwo'
import {GET_RANDOM_TWO_IMAGES} from '../actions/twoRandomImages'

const reducer = (state = {name:[], twoPictures:[]}, action = {}) => {

  switch (action.type) {
    case GET_BREED_NAMES:
      return {...state, name: action.payload[0]}
    case GET_RANDOM_TWO_IMAGES:
      return{
        ...state, 
        twoPictures : action.payload} 
    default:
      return state
  }
}

export default reducer
