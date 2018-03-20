import * as types from './actionTypes';
import GuestApi from '../api/guestApi';
import history from '../history'
import {getPotlucks} from './potlucksActions'

export function inviteGuests(idList) {
  return function(dispatch) {
    return GuestApi.createGuests(idList).then(response => {
      dispatch(getPotlucks());
      history.push(`/potlucks/${idList.potluck_id}`)
    }).catch(error => {
      throw(error)
    })
  }
}

export function userRsvp(rsvp) {
  return function(dispatch) {
    return GuestApi.userRsvp(rsvp).then(response => {
      dispatch(getPotlucks());
      history.push(`/potlucks/${rsvp.potluckId}`)
    }).catch(error => {
      throw(error)
    })
  }
}

export function removeGuests(idList) {
  return function(dispatch) {
    return GuestApi.removeGuests(idList).then(response => {
      dispatch(getPotlucks());
      history.push(`/potlucks/${idList.potluck_id}`)
    }).catch(error => {
      throw(error)
    })
  }
}
