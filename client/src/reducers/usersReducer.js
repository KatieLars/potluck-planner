import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {BrowserRouter} from 'react-router-dom'

export default function usersReducer(state = initialState.user, action) {
    switch(action.type) { //change return value to {...state, action.user}
    case types.FOUND_USER:
      return {...state, user: action.user}
    case types.UPDATE_USER:
      return {...state, user: action.user}
    case types.LOG_OUT_SUCCESS:
      return {...state, user: {}}
    default:
      return state;
  }
}
