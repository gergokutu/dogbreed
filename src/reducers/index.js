import { combineReducers } from 'redux'
import dogBreeds from './dogList'
import images from './dogBreedImages'
import gameOneReducer from './gameOneReducer'
import gameTwoReducer from './gameTwoReducer'
import breedName from './getRightImage'

export default combineReducers({
  dogBreeds: dogBreeds,
  images: images,
  random: gameOneReducer,
  gameTwo: gameTwoReducer,
  breedName: breedName
})