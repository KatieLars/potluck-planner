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

  // static createPotluck(newPotluck) { //get potlucks
  //   const request = new Request('http://localhost:3001/potlucks', {
  //     method: 'POST',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${sessionStorage.jwt}`,
  //     }),
  //     body: JSON.stringify({potluck: newPotluck})
  //   });
  //
  //   return fetch(request).then(response => {
  //     return response.json();
  //   }).catch(error => {
  //     return error;
  //   });
  // }


}

export default PotluckApi
