import * as types from './actionTypes';
import GuestApi from '../api/guestApi';
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
