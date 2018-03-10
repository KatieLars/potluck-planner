import * as types from './actionTypes';
import FriendApi from '../api/friendApi';
import history from '../history'


export function removeFriends(friendshipIds) { //delete friendships--returns updated list of friends
  return function(dispatch) {
    return FriendApi.removeFriends(friendshipIds).then(response => {
      dispatch(removeFriendsSuccess(response));
    }).catch(error => {
      throw(error)
    })
  }
}

export function removeFriendsSuccess(updatedList) {
  return{
    type: types.REMOVE_FRIENDS,
    friends: updatedList
  }
}

export function addFriends(newFriendIds) { //returns updated lists with new friends added
  return function(dispatch) {
    return FriendApi.addFriends(newFriendIds).then(response => {
      dispatch(addFriendsSuccess(response));
      history.push("/friends")
    }).catch(error => {
      throw(error)
    })
  }
}


export function addFriendsSuccess(updatedList) {
  return{ type: types.ADD_FRIENDS,
    friends: updatedList
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

export function getFriends() { //list of all friends
    return function(dispatch) {
      return FriendApi.getFriends().then(response => {
        debugger
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
