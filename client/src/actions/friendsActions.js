import * as types from './actionTypes';
import FriendApi from '../api/friendApi';
import history from '../history'

export function getNotFriends(userId) { //gets all users who are NOT friends
  return function(dispatch) {
    return UserApi.updateUser(info).then(response => {
      dispatch(updateUserSuccess(response));
      history.push("/account")
    }).catch(error => {
      throw(error)
    })
  }
}

export function updateUserSuccess(user) {
  return {type: types.UPDATE_USER,
          user: user
  }
}
