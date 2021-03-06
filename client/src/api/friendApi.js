import * as serve from './server'

class FriendApi {

  static getFriends() { //get current friends
    const request = new Request(`${serve.PRODUCTION_SERVER}/friendships/friends`, {
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

  static getNotFriends() { //gets all users who are not friends
    const request = new Request(`${serve.PRODUCTION_SERVER}/friendships/not_friends`, {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      })
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static addFriends(newFriendIds) { //post new friends to database
    const request = new Request(`${serve.PRODUCTION_SERVER}/friendships/add_friends`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({newFriends: newFriendIds})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static removeFriends(friendshipIds) {
    const request = new Request(`${serve.PRODUCTION_SERVER}/friendships/end_friendships`, {
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
