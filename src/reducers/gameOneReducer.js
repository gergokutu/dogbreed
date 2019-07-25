import { GET_RANDOM_IMAGE } from '../actions/randomPicture'
import { GET_TWO_BREEDS } from '../actions/randomTwoDogs'
import { SEND_GOOD_ANSWER } from '../actions/sendGoodAnswers'
import { SEND_WRONG_ANSWER } from '../actions/sendWrongAnswer'

const reducer = (state = { picture: [], breeds: [], goodAnswers: [], wrongAnswers: [] }, action = {}) => {
  switch (action.type) {
    case GET_RANDOM_IMAGE:
      return { ...state, picture: action.payload }
    case GET_TWO_BREEDS:
      return { ...state, breeds: action.payload }
    case SEND_GOOD_ANSWER:
      return { ...state, goodAnswers: [...state.goodAnswers, action.payload] }
      case SEND_WRONG_ANSWER:
        return { ...state, wrongAnswers: [...state.wrongAnswers, action.payload] }
    default:
      return state
  }
}

export default reducer