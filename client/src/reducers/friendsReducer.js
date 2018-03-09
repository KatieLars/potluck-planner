import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {BrowserRouter} from 'react-router-dom'

export default function notFriendsReducer(state = initialState.friends, action) {
    switch(action.type) {
    case types.NOT_FRIENDS:
      return {...state, friends: {notFriends: action.notFriends.other_users}}
    default:
      return state;
  }
}

export default function removeFriendsReducer(state = initialState.friends, action) {
  switch(action.type) {
    case types.REMOVE_FRIENDS:
    debugger
      return {...state, friends: action.friends}
    default:
      return state;
  }
}
