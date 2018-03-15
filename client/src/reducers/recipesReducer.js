import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.recipes , action) => {
  switch(action.type) {
    case types.RECIPES_FOUND:
    debugger
      return {...state, recipes: action.recipes}
    case types.CREATE_RECIPES:
      return {...state, recipes: [...state, action.newRecipe]}
    default:
      return state
    }
}
