import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import SignIn from './components/signIn'
import UserHomePage from './pages/userHomePage'
import Navigation from './containers/navigation'
import { connect } from 'react-redux'
import PrivateRoute from './privateRoute'

class Routes extends Component {


  render() {
    debugger
    return(
    <div>
      <Navigation />
      <Route path="/signin" component={SignIn} />
      <Route path="/about" component={About}/>
      <Route exact path="/" component={Home}/>
      <PrivateRoute authenticated={sessionStorage.jwt} path="/home" component={UserHomePage}
        />
    </div>
  )}
}

export default Routes

// <PrivateRoute authenticated={this.props.authenticated} path="/home" component={UserHomePage}
//   />
