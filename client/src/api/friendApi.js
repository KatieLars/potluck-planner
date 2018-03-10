class FriendApi {

  static getFriends(userId) { //get current friends
    const request = new Request(`http://localhost:3001/users/${userId}/friends`, {
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

  static addFriends(userId) { //post new friends to database

  }

  static removeFriends(friendshipIds) {
    const request = new Request(`http://localhost:3001/friendships/end_friendships`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({friendship: friendshipIds})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default FriendApi
