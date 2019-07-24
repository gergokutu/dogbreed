import * as request from 'superagent'
export const GET_TWO_BREEDS = 'GET_TWO_BREEDS'

function getRandomTwoBreeds(dogs) {
  return {
    type: GET_TWO_BREEDS,
    payload: dogs
  };
}

export function displayRandomTwoDogs() {
  return function (dispatch) {
    request("https://dog.ceo/api/breeds/list/all/random/2")
      .then(response => {
        const res = Object.keys(response.body.message);
        dispatch(getRandomTwoBreeds(res));
      });
  };
}