import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomeNavbar from './components/welcomeNavbar'
import Home from './components/home'
import About from './components/about'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <WelcomeNavbar />
            <Route path="/about" component={About}/>
            <Route exact path="/" component={Home}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
