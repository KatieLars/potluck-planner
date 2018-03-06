class SessionApi {
  static signIn(credentials) {
    const request = new Request('http://localhost:3001/user_token', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });

debugger
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

  static getUserInfo(credentials) {

    const request = new Request('http://localhost:3001/find_user', {
      method: "POST",
      headers: new Headers({
        "Authorization": `Bearer ${sessionStorage.jwt}`
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

export default SessionApi;
