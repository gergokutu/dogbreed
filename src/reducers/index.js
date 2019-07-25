import { combineReducers } from 'redux'
import dogBreeds from './dogList'
import images from './dogBreedImages'
// following 2 lines have to be changed, because of the new reducer
// import picture from './randomPicture'
// import dogName from './randomTwoDogs'
import gameOneReducer from './gameOneReducer'

export default combineReducers({
  dogBreeds: dogBreeds,
  images: images,
  // following 2 lines have to be changed, because of the new reducer
  // picture: picture,
  // dogName: dogName,
  random: gameOneReducer,
})