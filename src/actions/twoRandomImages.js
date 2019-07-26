import * as request from 'superagent'
export const GET_RANDOM_TWO_IMAGES = 'GET_RANDOM_TWO_IMAGES'

function randomTwoImage(twoPictures) {
  console.log('twoPictures test:', twoPictures)
  return {
    type: GET_RANDOM_TWO_IMAGES,
    payload: twoPictures
  }
}

export  function displayImagesToAnswer() {
  return function (dispatch) {
    request
      .get(`https://dog.ceo/api/breeds/image/random/2`)
      .then(response => {
        dispatch(randomTwoImage(response.body.message))
      })
      .catch(console.error)
  }
}
