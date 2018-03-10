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

}

export default UserApi
