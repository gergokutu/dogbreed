import { GET_RANDOM_IMAGE } from '../actions/randomPicture'
import { GET_TWO_BREEDS } from '../actions/randomTwoDogs'
import { SEND_GOOD_ANSWER1 } from '../actions/sendGoodAnswer1'
import { SEND_WRONG_ANSWER1 } from '../actions/sendWrongAnswer1'
import { GET_BREEDS } from '../actions/dogList'

const reducer = (state = { picture: [], breeds: [], goodAnswers1: [], wrongAnswers1: [], dogBreeds: [] }, action = {}) => {
  switch (action.type) {
    case GET_RANDOM_IMAGE:
      return { ...state, picture: action.payload }
    case GET_BREEDS:
      return { ...state, dogBreeds: action.payload }
    case GET_TWO_BREEDS:
      return { ...state, breeds: action.payload }
    case SEND_GOOD_ANSWER1:
      return { ...state, goodAnswers1: [...state.goodAnswers1, action.payload] }
      case SEND_WRONG_ANSWER1:
        return { ...state, wrongAnswers1: [...state.wrongAnswers1, action.payload] }
    default:
      return state
  }
}

export default reducer