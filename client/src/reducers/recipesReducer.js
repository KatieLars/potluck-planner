import * as types from '../actions/actionTypes';
import initialState from './initialState';

const filterRecipes = (recipes) => {
  return recipes.filter(recipe => recipe !== null)
}

const deleteRecipe = (recipes, id) => {
  return recipes.filter(recipe => recipe.id !== id)
}

export default (state = initialState.recipes , action) => {
  switch(action.type) {
    case types.RECIPES_FOUND:
      return {...state, allRecipes: filterRecipes(action.recipes.all_recipes),
        userRecipes: {newRecipes: filterRecipes(action.recipes.user_recipes.new_recipes),
                      cookedRecipes: filterRecipes(action.recipes.user_recipes.cooked_recipes),
                      totalRecipes: filterRecipes(action.recipes.user_recipes.total_recipes)}}
    case types.DELETE_RECIPE:
      return {...state, allRecipes: deleteRecipe(state.allRecipes, action.id.id)),
        userRecipes: {newRecipes: deleteRecipe(state.userRecipes.newRecipes, action.id.id),
                      cookedRecipes: deleteRecipe(state.userRecipes.cookedRecipes, action.id.id),
                      totalRecipes: deleteRecipe(state.userRecipes.allRecipes, action.id.id)}}
    default:
      return state;
    }
}
