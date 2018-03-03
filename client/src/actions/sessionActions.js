import * as types from './actionTypes';
import SessionApi from '../api/SessionApi'; //this handles api requests

export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function signIn(credentials) { //credentials come from state
  return function(dispatch) {
    return SessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}
