import * as serve from './server'

class PotluckRecipeApi {

  static createPotluckRecipes(recipeIds) { //take an array of recipe IDs and a potluckid
    const request = new Request(`${serve.PRODUCTION_SERVER}/potluck_recipes`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({potluck_recipes: {recipe_ids: recipeIds.selectedIds, potluck_id: recipeIds.potluck_id}})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default PotluckRecipeApi
