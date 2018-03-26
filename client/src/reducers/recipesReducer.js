import * as types from '../actions/actionTypes';
import initialState from './initialState';

const filterRecipes = (recipes) => {
  return recipes.filter(recipe => recipe !== null)
}

export default (state = initialState.recipes , action) => {

//LISTEN FOR DELETE_RECIPE
  switch(action.type) {
    case types.RECIPES_FOUND:
      return {...state, allRecipes: filterRecipes(action.recipes.all_recipes),
        userRecipes: {newRecipes: filterRecipes(action.recipes.user_recipes.new_recipes),
                      cookedRecipes: filterRecipes(action.recipes.user_recipes.cooked_recipes),
                      totalRecipes: filterRecipes(action.recipes.user_recipes.total_recipes)}}
    default:
      return state
    }
}
