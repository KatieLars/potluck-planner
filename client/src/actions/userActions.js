import * as types from './actionTypes';
import userApi from '../api/userApi';
import history from '../history'
import {signIn} from './sessionActions'

export function getUser(credentials) {
  return function(dispatch) {
    return userApi.getUserInfo(credentials).then(response => {
      dispatch(getUserSuccess(response));
      history.push("/home")
    }).catch(error => {
      throw(error)
    })
  }
}

export function getUserSuccess(user) {
  return {type: types.FOUND_USER,
          user: user
  }
}

export function createUser(info) {
  return function(dispatch) {
    return userApi.signUp(info).then(response => {
      const credentials = {email: response.email, password: response.password}
      dispatch(signIn(credentials))
    }).catch(error => {
      throw(error);
      });
  }
}

export function updateUser(info) {
  return function(dispatch) {
    return userApi.updateUser(info).then(response => {
      dispatch(updateUserSuccess(response));
      history.push("/account")
    }).catch(error => {
      throw(error)
    })
  }
}

export function updateUserSuccess(user) {
  return {type: types.UPDATE_USER,
          user: user
  }
}
