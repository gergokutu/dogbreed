import * as request from 'superagent'
export const GET_BREEDS = 'GET_BREEDS'

function getBreeds(dogs) {
  return {
    type: GET_BREEDS,
    payload: dogs
  };
}

// we will need it in different components as well
// not really reusable
// try with async func and thunk
// use dispatch and getState as well
// using get state you can grab any part of the redux store

// if we have dogs in the state » do not fetch them...
// example
// if (this.props.dog.length === 1)
// using get state you can grab any part of the redux store...
// ...so
// if (getState().length !== 0) return // do not do anything
// this.props.dogs.dispatch(getDogs)

export function displayDogs() {
  return function (dispatch, getState) {
    if (getState().dogBreeds.length !== 0) return
    // console.log(getState())
    request("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        const res = Object.keys(response.body.message);
        dispatch(getBreeds(res));
      });
  };
}