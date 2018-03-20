import * as types from './actionTypes';
import GuestApi from '../api/guestApi';
import history from '../history'
import {getPotlucks} from './potlucksActions'

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
