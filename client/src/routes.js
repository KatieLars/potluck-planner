import React, { Component } from 'react';
import { Route, onEnter } from 'react-router';
import Home from './components/home'
import About from './components/about'
import SignIn from './components/signIn'
import UserHomePage from './pages/userHomePage'
import Navigation from './containers/navigation'

class Routes extends Component {

requireAuth(nextState, replace){
    if (!sessionStorage.jwt) {
      replace({
        pathname: '/signin',
        state: { nextPathname: nextState.location.pathname }
      })
    }}

  render() {
    return(
    <div>
      <Navigation />
      <Route path="/signin" component={SignIn} />
      <Route path="/about" component={About}/>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={UserHomePage}
        onEnter={this.requireAuth}/>
    </div>
  )}
}

export default Routes
