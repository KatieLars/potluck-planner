import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {BrowserRouter} from 'react-router-dom'

export default function usersReducer(state = initialState.user, action) {
    switch(action.type) {
    case types.SIGN_IN_SUCCESS:
      return {...state, user: action.user}
    default:
      return state;
  }
}
