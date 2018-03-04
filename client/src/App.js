import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomeNavbar from './components/welcomeNavbar'
import Home from './components/home'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <WelcomeNavbar />
          <Route exact path="/" component={Home}/>
        </Router>
      </div>
    );
  }
}

export default App;
