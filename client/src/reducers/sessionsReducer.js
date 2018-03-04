import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {BrowserRouter} from 'react-router';

export default function sessionsReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      history.push('/')
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
