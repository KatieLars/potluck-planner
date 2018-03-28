import * as types from './actionTypes';
import PotluckApi from '../api/potluckApi';
import history from '../history'

//REFACTOR GETPOTLUCKS()

export function cancelPotluck(potluckId) { //refactor--you only need to update one potluck
  return function(dispatch) {
    return PotluckApi.cancelPotluck(potluckId).then(response => {
      // dispatch(cancelPotluckSuccess(response))
      dispatch(getPotlucks(response));
      history.push("/potlucks")
    }).catch(error => {
      throw(error)
    })
  }
}

function cancelPotluckSuccess(updatedPotluck) {
  return{ type: types.CANCEL_POTLUCK,
      updatedPotluck
  }
}

export function createPotluck(newPotluck) {
  return function(dispatch) {
    return PotluckApi.createPotluck(newPotluck).then(response => {
      dispatch(createPotluckSuccess(response));
      history.push(`/potlucks/${response.id}`)
    }).catch(error => {
      throw(error)
    })
  }
}

export function createPotluckSuccess(newPotluck) {
  return{ type: types.CREATE_POTLUCK,
    newPotluck: newPotluck
  }
}

export function getPotlucks() {
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
//UPDATE TO GET RID OF GETPOTLUCKS() TO JUST UPDATE THE ONE POTLUCK
  export function updatePotluck(info) {
    return function(dispatch) {
      return PotluckApi.updatePotluck(info).then(response => {
          dispatch(getPotlucks());
        history.push(`/potlucks/${response.id}`)
      }).catch(error => {
        throw(error)
      })
    }
  }
