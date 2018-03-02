import React, { Component } from 'react';
import WelcomeNavbar from './components/welcomeNavbar'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import About from './components/about'
import Home from './components/home'
import SignIn from "./containers/signIn"

class App extends Component {
  render() {
    return (
      <div className="navbar">

        <Router>
          <div>
            <WelcomeNavbar />
            <Route path="/about" render={About} />
            <Route exact path="/" render={Home} />
            <Route path="/signin" component={SignIn}
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
