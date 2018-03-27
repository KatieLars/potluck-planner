import * as types from './actionTypes';
import RecipeApi from '../api/recipeApi';
import history from '../history'
import {getPotlucks} from './potlucksActions'
import PotluckRecipeApi from '../api/potluckRecipeApi'
import GuestApi from '../api/guestApi'


export function inviteGuests(idList) {
  return function(dispatch) {
    return GuestApi.createGuests(idList).then(response => {
      debugger
      dispatch(getPotlucks());
      history.push(`/potlucks/${idList.potluck_id}`)
    }).catch(error => {
      throw(error)
    })
  }
}

function recipeDelete(id) {
  return {
    type: types.DELETE_RECIPE,
    id
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

  export function deleteRecipe(info) {
    return function(dispatch) { //coming from potluck show page
      return RecipeApi.deleteRecipe(info).then(response => {
        if(info.potluck_id){
          dispatch(recipeDelete(response))
          history.push(`/potlucks/${info.potluck_id}`)
        }else{
        dispatch(recipeDelete(response)) //
        history.push('/recipes')
      }}).catch(error => {
        throw(error)
      })
    }
  }

  export function claimRecipe(info) {
    return function(dispatch) { //coming from potluck show page
      return RecipeApi.claimRecipe(info).then(response => {
          dispatch(getPotlucks());
          history.push(`/potlucks/${info.potluck_id}`)
      }).catch(error => {
        throw(error)
      })
    }

  }
