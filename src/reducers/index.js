import { combineReducers } from 'redux'
import dogBreeds from './dogList'
import images from './dogBreedImages'
import gameOneReducer from './gameOneReducer'

export default combineReducers({
  dogBreeds: dogBreeds,
  images: images,
  random: gameOneReducer,
})