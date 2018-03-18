import * as types from './actionTypes';
import GuestApi from '../api/guestApi';
import history from '../history'
import {getPotlucks} from './potlucksActions'

export function uninviteGuests(uninvitedGuests) { //delete friendships--returns updated list of friends
  return function(dispatch) {
    return GuestApi.deleteGuestships(uninvitedGuests).then(response => {
      dispatch(uninviteGuestsSuccess(response));
    }).catch(error => {
      throw(error)
    })
  }
}

export function uninviteGuestsSuccess(updatedGuestList) {
  return{
    type: types.UNINVITE_GUESTS,
    guests: updatedGuestList
  }
}

export function userRsvp(rsvp) {
  return function(dispatch) {
    return GuestApi.userRsvp(rsvp).then(response => {
      dispatch(getPotlucks());
    }).catch(error => {
      throw(error)
    })
  }
}
