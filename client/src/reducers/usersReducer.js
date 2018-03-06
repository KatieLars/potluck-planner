import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {BrowserRouter} from 'react-router-dom'

export default function usersReducer(state = initialState.user, action) {
    switch(action.type) {
    case types.NEW_USER_SUCCESS:
      const newState = {...state, user: action.user}
      debugger
      return newState
    default:
      return state;
  }
}
