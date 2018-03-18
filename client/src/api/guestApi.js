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

  static userRsvp(rsvp) {
    const request = new Request(`http://localhost:3001/guestships/${rsvp.guestshipId}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({guestship: rsvp})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static uninviteGuests(uninvitedGuests) {
    const request = new Request(`http://localhost:3001/guestships/end_guestships`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({guestship: uninvitedGuests})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default GuestApi
