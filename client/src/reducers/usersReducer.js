import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {BrowserRouter} from 'react-router-dom'

export default function usersReducer(state = initialState.session, action) {
  debugger
  switch(action.type) {
    case types.NEW_USER_SUCCESS:
    debugger
      return {...state, action.user}
    default:
      return state;
  }
}
