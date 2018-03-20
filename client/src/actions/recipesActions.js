import * as types from './actionTypes';
import RecipeApi from '../api/recipeApi';
import history from '../history'
import {getPotlucks} from './potlucksActions'
import PotluckRecipeApi from '../api/potluckRecipeApi'
import GuestApi from '../api/guestApi'


// export function cancelPotluck(potluckId) { //returns updated list of potlucks
//   return function(dispatch) { //can only delete if user ID matches
//     return PotluckApi.cancelPotluck(potluckId).then(response => {
//       dispatch(cancelPotlucksSuccess(response));
//     }).catch(error => {
//       throw(error)
//     })
//   }
// }
//
// export function cancelPotlucksSuccess(updatedList) {
//   return{
//     type: types.CANCEL_POTLUCK,
//     potlucks: updatedList
//   }
// }
//

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

export function createRecipe(info) { //alert and return to potlucks page
  return function(dispatch) {
    return RecipeApi.createRecipe(info).then(response => {
      if(info.potluck_id){
        dispatch(getPotlucks())
        history.push(`/potlucks/${info.potluck_id}`)
      }else{
      dispatch(getRecipes());
      history.push('/recipes')
    }}).catch(error => {
      throw(error)
    }) //good
  }
}

export function getRecipes() {
    return function(dispatch) {
      return RecipeApi.getRecipes().then(response => {
        dispatch(getRecipesSuccess(response));
      }).catch(error => {
        throw(error)
      })
    }
  }

export function getRecipesSuccess(recipes) {
    return {
      type: types.RECIPES_FOUND,
      recipes: recipes
    }
  }

  export function updateRecipe(info) { //recipe updateRecipe
    return function(dispatch) {
      return RecipeApi.updateRecipe(info).then(response => {
        if(info.potluck_id){
          dispatch(getPotlucks())
          history.push(`/potlucks/${info.potluck_id}`)
        }else{
        dispatch(getRecipes());
        history.push('/recipes')
      }}).catch(error => {
        throw(error)
      })
    }
  }

  export function createPotluckRecipes(info) { //add recipes (creates potluck_recipes) to potluck
    return function(dispatch) {
      return PotluckRecipeApi.createPotluckRecipes(info).then(response => {
        if(info.potluck_id){
          dispatch(getPotlucks())
          history.push(`/potlucks/${info.potluck_id}`)
        }else{
        dispatch(getRecipes());
        history.push('/recipes')
      }}).catch(error => {
        throw(error)
      })
    }
  }

  export function deleteRecipe(recipeId) {
    return function(dispatch) { //coming from potluck show page
      return RecipeApi.deleteRecipe(recipeId).then(response => {
        if(info.potluck_id){
          dispatch(getPotlucks())
          history.push(`/potlucks/${info.potluck_id}`)
        }else{ //coming from recipe index
        dispatch(getRecipes());
        history.push('/recipes')
      }}).catch(error => {
        throw(error)
      })
    }
  }
