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

export function displayImages() {
  return function (dispatch) {
    const breed = this.props.match.params.breed  
    request
      .get(`https://dog.ceo/api/breeds/${encodeURIComponent(breed)}/images`)
      .then(response => dispatch(getImages(response.body.message)))
      .catch(console.error)
  }
}
 // now go to the reducer » /reducers/dogBreedImages.js