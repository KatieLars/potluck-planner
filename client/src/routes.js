import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import SignIn from './components/signIn'
import UserHomePage from './pages/userHomePage'
import Navigation from './containers/navigation'
import { connect } from 'react-redux'
import PrivateRoute from './privateRoute'

class Routes extends Component {


  render() {
    return(
    <div>
    <Navigation />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/signin" component={SignIn} />
      <Route path="/about" component={About}/>
      <PrivateRoute authenticated={!!sessionStorage.jwt} path="/home" component={UserHomePage}
        />
      </Switch>
    </div>
  )}
}

export default Routes

// <PrivateRoute authenticated={this.props.authenticated} path="/home" component={UserHomePage}
//   />
