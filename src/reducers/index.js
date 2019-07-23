// step11 import and combine » dogBreedImages
import { combineReducers } from 'redux'
import dogBreeds from './dogList'
import images from './dogBreedImages'

export default combineReducers({
  dogBreeds: dogBreeds,
  images: images
})