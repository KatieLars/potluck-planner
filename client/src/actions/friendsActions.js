import * as types from './actionTypes';
import FriendApi from '../api/friendApi';
import history from '../history'


export function removeFriends(friendshipIds) {
  return function(dispatch) {
    return FriendApi.removeFriends(friendshipIds).then(response => {
      dispatch(removeFriendsSuccess(response));
    }).catch(error => {
      throw(error)
    })
  }
}

export function removeFriendsSuccess(newList) {
  return{
    type: types.REMOVE_FRIENDS,
    friends: newList
  }
}

export function getNotFriends() { //gets all users who are NOT friends
  return function(dispatch) {
    return FriendApi.getNotFriends().then(response => {
      dispatch(getNotFriendsSuccess(response));
    }).catch(error => {
      throw(error)
    })
  }
}

export function getNotFriendsSuccess(notFriends) {
  return {type: types.NOT_FRIENDS,
          notFriends: notFriends
  }
}

export function getFriends() {
    return function(dispatch) {
      return FriendApi.getFriends().then(response => {
        dispatch(getFriendsSuccess(response));
      }).catch(error => {
        throw(error)
      })
    }
  }
//
export function getFriendsSuccess(friends) {
    return {
      type: types.FRIENDS_FOUND,
      friends: friends
    }
  }
