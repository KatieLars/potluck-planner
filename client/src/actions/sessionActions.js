import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';

export function signInSuccess() {
  return {type: types.SIGN_IN_SUCCESS
  }
}

export function newUserSuccess(user) {
  return {type: types.NEW_USER_SUCCESS,
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
      this.props.history.push("/home")
      }).catch(error => {
      throw(error);
      });
  }
}

export function signOut() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT_SUCCESS}
}
