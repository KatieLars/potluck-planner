import * as types from './actionTypes';
import FriendApi from '../api/friendApi';
import history from '../history'

export function updateUser(info) {
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
