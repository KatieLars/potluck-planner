import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.recipes , action) => {

  switch(action.type) {
    case types.RECIPES_FOUND:
      return {...state, allRecipes: action.recipes.all_recipes, userRecipes: {newRecipes: action.recipes.user_recipes.new_recipes, cookedRecipes: action.recipes.user_recipes.cooked_recipes}}
    case types.CREATE_RECIPE:
      return {...state, recipes: [...state.recipes.userRecipes.newRecipes, action.newRecipe ]}
    default:
      return state
    }
}
