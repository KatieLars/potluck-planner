class FriendApi {
  static getNotFriends(userId) {
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

  static getFriends(userId) {

  }

  static addFriends(userId) {

  }

  static removeFriends(userId) {
    
  }
}

export default FriendApi
