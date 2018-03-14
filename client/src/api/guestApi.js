class GuestApi {

  // static getFriends() { //get current friends
  //   const request = new Request('http://localhost:3001/friendships/friends', {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${sessionStorage.jwt}`,
  //     })
  //   });
  //
  //   return fetch(request).then(response => {
  //     return response.json();
  //   }).catch(error => {
  //     return error;
  //   });
  // }
  //
  // static getNotFriends() { //gets all users who are not friends
  //   const request = new Request('http://localhost:3001/friendships/not_friends', {
  //     method: "GET",
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${sessionStorage.jwt}`,
  //     })
  //   })
  //
  //   return fetch(request).then(response => {
  //     return response.json();
  //   }).catch(error => {
  //     return error;
  //   });
  // }
  //
  // static addFriends(newFriendIds) { //post new friends to database
  //   const request = new Request(`http://localhost:3001/friendships/add_friends`, {
  //     method: 'POST',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${sessionStorage.jwt}`,
  //     }),
  //     body: JSON.stringify({newFriends: newFriendIds})
  //   })
  //
  //   return fetch(request).then(response => {
  //     return response.json();
  //   }).catch(error => {
  //     return error;
  //   });
  // }

  static uninviteGuests(uninvitedGuests) {
    const request = new Request(`http://localhost:3001/guestships/end_guestships`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({guestship: uninviteGuests})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}
