class UserApi {
  static updateUser(info) {
    const request = new Request('http://localhost:3001/', {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json',
        "Authentication": `Bearer ${sessionStorage.jwt}`
      }),
      body: JSON.stringify({user: info})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default UserApi
