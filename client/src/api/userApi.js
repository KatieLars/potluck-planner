class UserApi {
  static updateUser(info) {
    const request = new Request(`http://localhost:3001/users/${info.id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({user: info})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static signUp(info) {
    const request= new Request('http://localhost:3001/users', {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({user: info})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getUserInfo(credentials) { //user show page
    const request = new Request('http://localhost:3001/find_user', {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({user: credentials})
    })
    
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }


}

export default UserApi
