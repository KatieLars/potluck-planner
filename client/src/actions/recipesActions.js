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
// export function createPotluck(newPotluck) { //alert and return to potlucks page
//   return function(dispatch) {
//     return PotluckApi.createPotluck(newPotluck).then(response => {
//       dispatch(createPotluckSuccess(response));
//       debugger
//       history.push(`/potlucks/${response.id}`)
//     }).catch(error => {
//       throw(error)
//     })
//   }
// }
//
// export function createPotluckSuccess(newPotluck) {
//   return{ type: types.CREATE_POTLUCK,
//     newPotluck: newPotluck
//   }
// }

export function getRecipes() { //list of all potlucks user created or has been invited too
    return function(dispatch) {
      return RecipeApi.getRecipes().then(response => {
        dispatch(getRecipesSuccess(response));
      }).catch(error => {
        throw(error)
      })
    }
  }
// //
export function getRecipesSuccess(recipes) {
    return {
      type: types.RECIPES_FOUND,
      recipes: recipes
    }
  }
//
//   export function updatePotlucks(info) {
//     return function(dispatch) {
//       return PotluckApi.updatePotluck(info).then(response => {
//         dispatch(updatePotluckSuccess(response));
//         history.push(`/potlucks/${response.id}`)
//       }).catch(error => {
//         throw(error)
//       })
//     }
//   }
//
//   export function updatePotluckSuccess(potluck) {
//     return {type: types.UPDATE_POTLUCK,
//             potluck: potluck
//     }
//   }
