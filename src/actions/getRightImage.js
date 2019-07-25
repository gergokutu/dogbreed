import * as request from 'superagent'
export const GET_RIGHT_IMAGE = 'GET_RIGHT_IMAGE'

function getRightImage(picture) {
  return {
    type: GET_RIGHT_IMAGE,
    payload: picture
  }
}

<<<<<<< HEAD
export function displayRightImage() {
  return function (dispatch) {
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent()}/images/random/1`)
=======
export function displayRightImage(breed) {
  return function (dispatch) {
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/1`)
>>>>>>> f3079270ec427fc1d50dfaed524f95643a799679
      .then(response => dispatch(getRightImage(response.body.message)))
      .catch(console.error)
  }
}
