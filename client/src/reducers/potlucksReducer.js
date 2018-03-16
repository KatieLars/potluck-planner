import * as types from '../actions/actionTypes';
import initialState from './initialState';
//need to add a total_potlucks_recipes
export default (state = initialState.potlucks , action) => {
  switch(action.type) {
    case types.POTLUCKS_FOUND:
      return {...state, potlucks: action.potlucks.potlucks, allPotluckRecipes: action.potlucks.total_potluck_recipes}
    case types.CREATE_POTLUCK:
      return {...state, potlucks: [...state, action.newPotluck]}
    default:
      return state
    }
}
