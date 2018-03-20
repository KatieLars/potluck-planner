import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.recipes , action) => {

  switch(action.type) {
    case types.RECIPES_FOUND:
    debugger
      return {...state, allRecipes: action.recipes.all_recipes, userRecipes: {newRecipes: action.recipes.user_recipes.new_recipes, cookedRecipes: action.recipes.user_recipes.cooked_recipes, totalRecipes: action.recipes.user_recipes.total_recipes}}
    default:
      return state
    }
}
