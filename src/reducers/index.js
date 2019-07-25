import { combineReducers } from 'redux'
import dogBreeds from './dogList'
import images from './dogBreedImages'
import picture from './randomPicture'
import dogName from './randomTwoDogs'
import name from './gameTwoReducer'

export default combineReducers({
  dogBreeds: dogBreeds,
  images: images,
  picture: picture,
  dogName: dogName,
  name: name
})