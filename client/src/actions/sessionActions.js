import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';

export function signInSuccess() {
  return {type: types.SIGN_IN_SUCCESS}
}

export function signIn(credentials) {
  return function(dispatch) {
    return sessionApi.signIn(credentials).then(response => {
      console.log(response.jwt)})
  };
}

// sessionStorage.setItem('jwt', response.jwt);
// dispatch(signInSuccess());
// }).catch(error => {
// throw(error);
// });
