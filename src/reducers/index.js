import { combineReducers } from 'redux'
import dogBreeds from './dogList'
import images from './dogBreedImages'
import picture from './randomPicture'

export default combineReducers({
  dogBreeds: dogBreeds,
  images: images,
  picture: picture
})