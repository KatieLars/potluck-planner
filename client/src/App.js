import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'reactstrap'
import WelcomeNavbar from './containers/welcomeNavbar'


class App extends Component {
  render() {
    return (
      <div className="navbar">
          <WelcomeNavbar />
      </div>

    );
  }
}

export default App;
