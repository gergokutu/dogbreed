import { combineReducers } from 'redux'
import dogBreeds from './dogList'
import images from './dogBreedImages'
import picture from './randomPicture'
import dogName from './randomTwoDogs'
// import GameTwo from '../components/GameTwo';
import gameTwoReducer from './gameTwoReducer'

export default combineReducers({
  dogBreeds: dogBreeds,
  images: images,
  picture: picture,
  dogName: dogName,
  gameTwo: gameTwoReducer
})