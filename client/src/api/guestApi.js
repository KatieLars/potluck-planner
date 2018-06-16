import * as serve from './server'

class GuestApi {

  static createGuests(idList) {
    const request = new Request(`${serve.PRODUCTION_SERVER}/guestships`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({guestship: idList})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

    static userRsvp(rsvp) {
      const request = new Request(`${serve.PRODUCTION_SERVER}/guestships/${rsvp.guestshipId}`, {
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

  static removeGuests(idList) {
    const request = new Request(`${serve.PRODUCTION_SERVER}/guestships/end_guestships`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.jwt}`,
      }),
      body: JSON.stringify({guestship: idList})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default GuestApi
