import React, { Component } from 'react';
import {BrowserRouter as Router, Routes} from 'react-router-dom'
import WelcomeNavbar from './components/welcomeNavbar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeNavbar />
        <Router>
          <Route exact path="/" render={Home}/>
        </Router>
      </div>
    );
  }
}

export default App;
