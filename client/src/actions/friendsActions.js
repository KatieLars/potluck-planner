import * as types from './actionTypes';
import UserApi from '../api/userApi';
import history from '../history'

export function getNotFriends(userId) { //gets all users who are NOT friends
  return function(dispatch) {
    return UserApi.getNotFriends(userId).then(response => {

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
