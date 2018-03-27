import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
import history from '../history'
import {getUser} from './userActions'

//should just contain sign in and sign out

export function signIn(credentials) { //sign in user
  return function(dispatch) {
    return sessionApi.signIn(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt); //first api request sets sessionStorage
      dispatch(getUser(credentials)); //getting user info
    }).catch(error => {
      throw(error);
      });
}}

export function signOut() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT_SUCCESS}
}
