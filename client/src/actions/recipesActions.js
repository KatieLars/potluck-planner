import * as types from './actionTypes';
import RecipeApi from '../api/recipeApi';
import history from '../history'


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
export function createRecipe(newRecipe) { //alert and return to potlucks page
  return function(dispatch) {
    return RecipeApi.createRecipe(newRecipe).then(response => {
      dispatch(getRecipes());
    }).catch(error => {
      throw(error)
    })
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
        dispatch(getRecipes());
      }).catch(error => {
        throw(error)
      })
    }
  }
