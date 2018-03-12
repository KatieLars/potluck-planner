import * as types from './actionTypes';
import FriendApi from '../api/friendApi';
import history from '../history'


export function cancelPotluck(potluckId) { //delete friendships--returns updated list of friends
  return function(dispatch) {
    return PotluckApi.cancelPotluck(potluckId).then(response => {
      dispatch(cancelPotlucksSuccess(response));
    }).catch(error => {
      throw(error)
    })
  }
}

export function cancelPotlucksSuccess(updatedList) {
  return{
    type: types.CANCEL_POTLUCK,
    potlucks: updatedList
  }
}

export function createPotluck(newPotluck) { //returns updated lists with new friends added
  return function(dispatch) {
    return PotluckApi.createPotluck(newPotluck).then(response => {
      dispatch(createPotluckSuccess(response));
    }).catch(error => {
      throw(error)
    })
  }
}

export function createPotluckSuccess(updatedList) {
  return{ type: types.ADD_FRIENDS,
    potlucks: updatedList
  }
}

export function getPotlucks() { //list of all friends
    return function(dispatch) {
      return PotluckApi.getPotlucks().then(response => {
        dispatch(getPotlucksSuccess(response));
      }).catch(error => {
        throw(error)
      })
    }
  }
//
export function getPotlucksSuccess(potlucks) {
    return {
      type: types.POTLUCKS_FOUND,
      potlucks: potlucks
    }
  }

  export function updatePotlucks(info) {
    return function(dispatch) {
      return PotluckApi.updatePotluck(info).then(response => {
        dispatch(updatePotluckSuccess(response));
        history.push(`/potlucks/${response.id}`)
      }).catch(error => {
        throw(error)
      })
    }
  }

  export function updatePotluckSuccess(potluck) {
    return {type: types.UPDATE_USER,
            potluck: potluck
    }
  }
