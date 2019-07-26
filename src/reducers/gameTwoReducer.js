import { GET_BREED_NAMES } from '../actions/gameTwo'
import { GET_RANDOM_TWO_IMAGES } from '../actions/twoRandomImages'
import { SEND_GOOD_ANSWER } from '../actions/sendGoodAnswers'
import { SEND_WRONG_ANSWER } from '../actions/sendWrongAnswer'

const reducer = (state = { name: [], twoPictures: [], goodAnswers: [], wrongAnswers: [] }, action = {}) => {

  switch (action.type) {
    case GET_BREED_NAMES:
      return { ...state, name: action.payload[0] }
    case GET_RANDOM_TWO_IMAGES:
      return {
        ...state,
        twoPictures: action.payload
      }
    case SEND_GOOD_ANSWER:
      return { ...state, goodAnswers: [...state.goodAnswers, action.payload] }
    case SEND_WRONG_ANSWER:
      return { ...state, wrongAnswers: [...state.wrongAnswers, action.payload] }
    default:
      return state
  }
}

export default reducer
