import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
import history from '../history'

export function signInSuccess(credentials) {
  return function(dispatch) {
    return sessionApi.getUserInfo(credentials).then(response => {
      dispatch(oldUserSuccess(response));
      history.push("/home")
    }).catch(error => {
      throw(error)
    })
  }
}
export function foundUser(user) {
  return {type: types.FOUND_USER,
          user: user
  }
}

export function oldUserSuccess(user) {
  return {type: types.FOUND_USER,
          user: user
  }
}

export function newUserSuccess() {
  return {type: types.NEW_USER_SUCCESS}
}

export function signIn(credentials) {
  return function(dispatch) {
    return sessionApi.signIn(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt); //first api request sets sessionStorage
      dispatch(signInSuccess(credentials)); //getting user info
    }).catch(error => {
      throw(error);
      });
}}

export function signUp(info) { //creates a user
  return function(dispatch) {
    return sessionApi.signUp(info).then(response => {
      const credentials = {email: response.email, password: response.password}
      dispatch(signIn(credentials))
    }).catch(error => {
      throw(error);
      });
  }
}

export function signOut() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT_SUCCESS}
}
