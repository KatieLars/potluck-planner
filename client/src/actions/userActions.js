import * as types from './actionTypes';
import UserApi from '../api/userApi';
import history from '../history'

export function updateUser(info) {
  return function(dispatch) {
    return UserApi.updateUser(info).then(response => {
      dispatch(oldUserSuccess(response));
      history.push("/home")
    }).catch(error => {
      throw(error)
    })
  }
}
