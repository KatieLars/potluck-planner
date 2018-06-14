import * as serve from './server'

class SessionApi {
  static signIn(credentials) {
    const request = new Request(`${serve.PRODUCTION_SERVER}/user_token`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default SessionApi;
