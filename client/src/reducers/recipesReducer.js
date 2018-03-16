import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.recipes , action) => {

  switch(action.type) {
    case types.RECIPES_FOUND:
    debugger
      return {...state, allRecipes: action.recipes.all_recipes, userRecipes: {newRecipes: action.recipes.user_recipes.new_recipes, cookedRecipes: action.recipes.user_recipes.cooked_recipes, totalRecipes: action.recipes.user_recipes.total_recipes}}
    case types.CREATE_RECIPE: //may have to debug--consider just chaining API calls together
      return {...state, recipes: [...state.recipes.userRecipes.newRecipes, action.newRecipe ]}
    default:
      return state
    }
}
