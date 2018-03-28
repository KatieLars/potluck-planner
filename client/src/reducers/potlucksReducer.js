import * as types from '../actions/actionTypes';
import initialState from './initialState';
//need to add a total_potlucks_recipess

const flatten = (arr) => [].concat(...arr)

const filterRecipes = (recipes) => {
  return recipes.filter(recipe => recipe !== null)
}

export default (state = initialState.potlucks , action) => {
  switch(action.type) {
    case types.POTLUCKS_FOUND:
    debugger
      let recipeCollection = []
      action.potlucks.map(potluck=> {recipeCollection.push(potluck.recipes)})
      return {...state, potlucks: action.potlucks, allPotluckRecipes: flatten(recipeCollection) }
    case types.CREATE_POTLUCK:
      return {...state, potlucks: [...state, action.newPotluck]}
    case types.DELETE_RECIPE:
      return {...state, potlucks: state.potlucks.map(potluck => {
        return {...potluck, recipes: potluck.recipes.filter(recipe => recipe.id !== action.id.id)}
    }), potluck_recipes_claimed: state.potlucks.map(potluck => {
        return {...potluck, potluck_recipes_claimed: potluck.potluck_recipes_claimed.filter(
          recipe_claimed => recipe_claimed.recipe.id !== action.id.id)}
    }), potluck_recipes: state.potlucks.map(potluck => {
        return {...potluck, potluck_recipes: potluck.potluck_recipes.filter(
          potluck_recipe => potluck_recipe.recipe_id !== action.id.id)}
    }) }
    default:
      return state
    }
}
