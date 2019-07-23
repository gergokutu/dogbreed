// step4
// do not forget to combine the reducers!!!
import * as request from 'superagent'
export const GET_BREED_IMAGES = 'GET_BREED_IMAGES'

function getImages(pictures) {
  return {
    type: GET_BREED_IMAGES,
    payload: pictures
  }
}

// do not forget to use the breed as parameter
export function displayImages(breed) {
  return function (dispatch) {
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/10`)
      .then(response => dispatch(getImages(response.body.message)))
      .catch(console.error)
  }
}

// now go to the reducer » /reducers/dogBreedImages.js
// /random/10 » just get 10 random photos
//  `https://dog.ceo/api/breed/${encodeURIComponent(breedName)}/images/random/10`