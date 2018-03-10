import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function friendsReducer(state = initialState.friends, action) {
    switch(action.type) {
    case types.NOT_FRIENDS:
      return {...state, friends: {notFriends: action.notFriends}}
    case types.REMOVE_FRIENDS:
      return {...state, friends: {friends: action.friends}}
    case types.FRIENDS_FOUND:
      return {...state, friends: {friends: action.friends}}
    case types.ADD_FRIENDS:
    debugger
      return {...state, friends: {friends: action.friends}}
    default:
      return state;
  }
}
