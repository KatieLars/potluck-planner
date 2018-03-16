import * as types from '../actions/actionTypes';
import initialState from './initialState';
//need to add a total_potlucks_recipes

const flatten = (arr) => [].concat(...arr)

export default (state = initialState.potlucks , action) => {
  switch(action.type) {
    case types.POTLUCKS_FOUND:
      let recipeCollection = []
      action.potlucks.map(potluck=> {recipeCollection.push(potluck.recipes)})
      return {...state, potlucks: action.potlucks, allPotluckRecipes: flatten(recipeCollection) }
    case types.CREATE_POTLUCK:
      return {...state, potlucks: [...state, action.newPotluck]}
    default:
      return state
    }
}
