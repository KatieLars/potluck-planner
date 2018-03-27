import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
import {getUser} from './userActions'

export function signIn(credentials) {
  return function(dispatch) {
    return sessionApi.signIn(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(getUser(credentials));
    }).catch(error => {
      throw(error);
      });
}}

export function signOut() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT_SUCCESS}
}
