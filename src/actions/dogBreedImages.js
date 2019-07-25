import * as request from 'superagent'
export const GET_BREED_IMAGES = 'GET_BREED_IMAGES'

function getImages(pictures) {
  return {
    type: GET_BREED_IMAGES,
    payload: pictures
  }
}

export function displayImages(breed) {
  return function (dispatch) {
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/10`)
      .then(response => dispatch(getImages(response.body.message)))
      .catch(console.error)
  }
}