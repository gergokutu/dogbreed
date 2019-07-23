import * as request from 'superagent'
export const GET_BREEDS = 'GET_BREEDS'

function getBreeds(dogs) {
  return {
    type: GET_BREEDS,
    payload: dogs
  };
}

export function displayDogs() {
  return function (dispatch) {
    request("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        const res = Object.keys(response.body.message);
        dispatch(getBreeds(res));
      });
  };
}

