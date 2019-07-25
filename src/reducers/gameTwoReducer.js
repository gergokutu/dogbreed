import { GET_BREED_NAMES} from '../actions/gameTwo'

const reducer = (state = [], action = {}) => {

  switch (action.type) {
    case GET_BREED_NAMES:
      return action.payload
    default:
      return state
  }
}

export default reducer
