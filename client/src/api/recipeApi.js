class RecipeApi {

  static getRecipes() { //get potlucks
    const request = new Request('http://localhost:3001/recipes', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createRecipe(newRecipe) { //get potlucks
    const request = new Request('http://localhost:3001/recipes', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({recipe: newRecipe})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateRecipe(recipe) { 
    const request = new Request(`http://localhost:3001/recipes/${recipe.id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({recipe: recipe})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }


}

export default RecipeApi
