import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomeNavbar from './components/welcomeNavbar'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <WelcomeNavbar />
            {Routes}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

    // <Route path="/signup" component={SignUp}/>
