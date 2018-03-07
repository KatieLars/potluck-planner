import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {BrowserRouter} from 'react-router-dom'

export default function sessionsReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.SIGN_IN_SUCCESS:
      if(sessionStorage.jwt !== undefined){
        return !!sessionStorage.jwt
      }
    case types.FOUND_USER:
      if(sessionStorage.jwt !== undefined){
        return !!sessionStorage.jwt
      }
    case types.LOG_OUT_SUCCESS:
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
