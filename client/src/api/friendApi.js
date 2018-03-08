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

  static getFriends(userId) { //get current friends

  }

  static addFriends(userId) { //post new friends to database

  }

  static removeFriends(userId) { //delete friendships

  }
}

export default FriendApi
