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
