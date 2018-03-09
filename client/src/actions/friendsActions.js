import * as types from './actionTypes';
import FriendApi from '../api/friendApi';
import history from '../history'
import FriendApi from '../api/friendApi'

export function removeFriends(friend_ids) {
  return function(dispatch) {
    return FriendApi.removeFriends(friend_ids).then(response => {
      dispatch(removeFriendsSuccess(response));
    }).catch(error => {
      throw(error)
    })
  }
}

//NONE OF THESE ARE BEING USED--ALL INFO GATHERED BY ORIGINAL USER API CALL
// export function getNotFriends(userId) { //gets all users who are NOT friends
//   return function(dispatch) {
//     return UserApi.getNotFriends(userId).then(response => {
//       dispatch(getNotFriendsSuccess(response));
//     }).catch(error => {
//       throw(error)
//     })
//   }
// }
//
// export function getNotFriendsSuccess(notFriends) {
//   return {type: types.NOT_FRIENDS,
//           notFriends: notFriends
//   }
// }
//
// export function getFriends(userId) {
//     return function(dispatch) {
//       return FriendApi.getFriends(userId).then(response => {
//         dispatch(getFriendsSuccess(response));
//       }).catch(error => {
//         throw(error)
//       })
//     }
//   }
//
// export function getFriendsSuccess(friends) {
//     return {
//       type: types.FRIENDS_FOUND,
//       friends: friends
//     }
//   }
