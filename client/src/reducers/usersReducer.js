import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {BrowserRouter} from 'react-router-dom'

export default function usersReducer(state = initialState, action) {
    switch(action.type) {
    case types.NEW_USER_SUCCESS:
      return {...state, user: action.user}
    case types.FOUND_USER:
      return {...state, user: action.user, session: !!sessionStorage.jwt}
    default:
      return state;
  }
}
