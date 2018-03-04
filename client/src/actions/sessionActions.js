import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';

export function signInSuccess() {
  return {type: types.SIGN_IN_SUCCESS}
}

export function signIn(credentials) {
  return function(dispatch) {
    return sessionApi.signin(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(signInSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}
