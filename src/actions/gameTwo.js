import * as request from 'superagent'
export const GET_BREED_NAMES = 'GET_BREED_NAMES'

function getBreedNames(names) {
  return {
    type: GET_BREED_NAMES,
    payload: names
  };
}

export function displayRandomNames() {
  return function (dispatch) {
    request("https://dog.ceo/api/breeds/list/all/random/3")
      .then(response => {
        const res = Object.keys(response.body.message);
        dispatch(getBreedNames(res));
      });
  };
}