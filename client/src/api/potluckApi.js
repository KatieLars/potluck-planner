class PotluckApi {

  static getPotlucks() { //get potlucks
    const request = new Request('http://localhost:3001/potlucks', {
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

  static createPotluck(newPotluck) { //get potlucks
    const request = new Request('http://localhost:3001/potlucks', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({potluck: newPotluck})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updatePotluck(info) { //get potlucks
    const request = new Request(`http://localhost:3001/potlucks/${info.id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({potluck: info})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static cancelPotluck(id) { //cancel potluck--could probably be just use updatePotluck
    const request = new Request(`http://localhost:3001/potlucks/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({potluck: {id: id, canceled: true}})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }


}

export default PotluckApi
