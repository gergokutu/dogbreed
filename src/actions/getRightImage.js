import * as request from 'superagent'
export const GET_RIGHT_IMAGE = 'GET_RIGHT_IMAGE'

function getRightImage(url, breed) {
  return {
    type: GET_RIGHT_IMAGE,
    payload: {
      url,
      breed
    }
  }
}

export function displayRightImage(breed) {
  return function (dispatch) {
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/1`)
      .then(response => {
        console.log('response test:', response)
        dispatch(getRightImage(response.body.message[0], breed))
      })
      .catch(console.error)
  }
}
