import { combineReducers } from 'redux'
import dogBreeds from './dogList'
import images from './dogBreedImages'
// import picture from './randomPicture'
// import dogName from './randomTwoDogs'
import gameOneReducer from './gameOneReducer'
// import {picture} from './gameOneReducer'
// import gameOneReducer from './'

export default combineReducers({
  dogBreeds: dogBreeds,
  images: images,
  // picture: picture,
  // dogName: dogName,
  random: gameOneReducer,
})