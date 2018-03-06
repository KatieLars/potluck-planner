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

export function oldUserSuccess(user) {
  return {type: types.FOUND_USER,
          user: user
  }
}

export function newUserSuccess(user) {
  return {type: types.NEW_USER_SUCCESS,
          user: user
  }
}

export function foundUser(user) {
  return {type: types.FOUND_USER,
          user: user
  }
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
      dispatch(newUserSuccess(response));
      history.push("/home")
    }).catch(error => {
      throw(error);
      });
  }
}

// export function getUserInfo(credentials) {
//   return function(dispatch) {
//     return sessionApi.getUserInfo(credentials).then(response => {
//       dispatch(foundUser(response));
//       history.push('/home')
//     }).catch(error => {
//       throw(error)
//     })
//   }
// }

export function signOut() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT_SUCCESS}
}

//sessionApi.signIn({email: response.email, password: response.password});
