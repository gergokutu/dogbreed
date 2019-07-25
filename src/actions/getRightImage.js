import * as request from 'superagent'
export const GET_RIGHT_IMAGE = 'GET_RIGHT_IMAGE'

function getRightImage(picture) {
  return {
    type: GET_RIGHT_IMAGE,
    payload: picture
  }
}

export function displayRightImage() {
  return function (dispatch) {
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent()}/images/random/1`)
      .then(response => dispatch(getRightImage(response.body.message)))
      .catch(console.error)
  }
}