import * as request from 'superagent'
export const GET_RANDOM_IMAGE = 'GET_RANDOM_IMAGE'

function randomImage(picture) {
  return {
    type: GET_RANDOM_IMAGE,
    payload: picture
  }
}

export function displayQuestionImage() {
  return function (dispatch) {
    request
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(response => dispatch(randomImage(response.body.message)))
      .catch(console.error)
  }
}

