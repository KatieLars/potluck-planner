import * as types from '../actions/actionTypes';
import initialState from './initialState';
//need to add a total_potlucks_recipess

const flatten = (arr) => [].concat(...arr)

export default (state = initialState.potlucks , action) => {
  switch(action.type) {
    case types.POTLUCKS_FOUND:
      let recipeCollection = []
      action.potlucks.map(potluck=> {recipeCollection.push(potluck.recipes)})
      return {...state, potlucks: action.potlucks, allPotluckRecipes: flatten(recipeCollection) }
    case types.CREATE_POTLUCK:
      return {...state, potlucks: [...state, action.newPotluck]}
    case types.DELETE_RECIPE:
      return {...state,
        potlucks: state.potlucks.map(potluck => {
          return {...potluck,
            recipes: potluck.recipes.filter(recipe => recipe.id !== action.id.id),
            potluck_recipes_claimed: potluck.potluck_recipes_claimed.filter(
              potluck_recipe_claimed => potluck_recipe_claimed.recipe.id !== action.id.id),
            potluck_recipes: potluck.potluck_recipes.filter(
              potluck_recipe => potluck_recipe.recipe_id !== action.id.id)
            }
        }), allPotluckRecipes: state.allPotluckRecipes.filter(recipe => recipe.id !== action.id.id)
      }
    default:
      return state
    }
}
