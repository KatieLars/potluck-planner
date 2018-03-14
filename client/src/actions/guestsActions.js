import * as types from './actionTypes';
import GuestApi from '../api/guestApi';
import history from '../history'


export function uninviteGuests(uninvitedGuests) { //delete friendships--returns updated list of friends
  return function(dispatch) {
    return GuestApi.deleteGuestships(uninvitedGuests).then(response => {
      dispatch(uninviteGuestsSuccess(updatedGuestList));
    }).catch(error => {
      throw(error)
    })
  }
}

export function uninviteGuestsSuccess(updatedGuestList) {
  return{
    type: types.UNINVITE_GUESTS,
    guests: updatedGuestsList
  }
}
