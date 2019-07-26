import { GET_BREED_NAMES } from '../actions/gameTwo'
import { GET_RANDOM_TWO_IMAGES } from '../actions/twoRandomImages'
import { SEND_GOOD_ANSWER2 } from '../actions/sendGoodAnswer2'
import { SEND_WRONG_ANSWER2 } from '../actions/sendWrongAnswer2'

const reducer = (state = { name: [], twoPictures: [], goodAnswers2: [], wrongAnswers2: [] }, action = {}) => {

  switch (action.type) {
    case GET_BREED_NAMES:
      return { ...state, name: action.payload[0] }
    case GET_RANDOM_TWO_IMAGES:
      return {
        ...state,
        twoPictures: action.payload
      }
    case SEND_GOOD_ANSWER2:
      return { ...state, goodAnswers2: [...state.goodAnswers2, action.payload] }
    case SEND_WRONG_ANSWER2:
      return { ...state, wrongAnswers2: [...state.wrongAnswers2, action.payload] }
    default:
      return state
  }
}

export default reducer
