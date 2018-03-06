import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
import history from '../history'

export function signInSuccess() {
  return {type: types.SIGN_IN_SUCCESS
  }
}

export function newUserSuccess(user) {
  return {type: types.SIGN_IN_SUCCESS,
          user: user
  }
}

export function signIn(credentials) {
  return function(dispatch) {
    return sessionApi.signIn(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(signInSuccess());
    }).catch(error => {
      throw(error);
      });
}}

export function signUp(info) {
  return function(dispatch) {
    return sessionApi.signUp(info).then(response => {
      dispatch(newUserSuccess(response));
      history.push("/home");
      }).catch(error => {
      throw(error);
      });
  }
}

export function signOut() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT_SUCCESS}
}

//sessionApi.signIn({email: response.email, password: response.password});
