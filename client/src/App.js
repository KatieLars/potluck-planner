import React, { Component } from 'react';
import {Router} from 'react-router-dom'
import Routes from './routes'
import history from './history'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
