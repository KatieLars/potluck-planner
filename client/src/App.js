import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomeNavbar from './components/welcomeNavbar'
import Home from './components/home'
import About from './components/about'
import SignIn from './components/signIn'
import UserHomePage from './pages/userHomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <WelcomeNavbar />
            <Route path="/about" component={About}/>
            <Route exact path="/" component={Home}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/home" component={UserHomePage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

    // <Route path="/signup" component={SignUp}/>
