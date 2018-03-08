import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {BrowserRouter} from 'react-router-dom'

export default function usersReducer(state = initialState.friends, action) {
    switch(action.type) {
    case types.NOT_FRIENDS:
    debugger
      return {...state, friends: {notFriends: action.notFriends.other_users}}
    default:
      return state;
  }
}
