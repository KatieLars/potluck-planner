import * as types from '../actions/actionTypes';
import initialState from './initialState';
//need to add a total_potlucks_recipes
export default (state = initialState.potlucks , action) => {
  switch(action.type) {
    case types.POTLUCKS_FOUND:
    debugger
      return {...state, potlucks: action.potlucks}
    case types.CREATE_POTLUCK:

      return {...state, potlucks: [...state, action.newPotluck]}
    default:
      return state
    }
}
