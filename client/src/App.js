import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'reactstrap'
import WelcomeNavbar from './containers/welcomeNavbar'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="navbar">
        <Router>
          <WelcomeNavbar />
        </Router>
      </div>

    );
  }
}

export default App;
