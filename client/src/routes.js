import React, { Component } from 'react';
import { Route, onEnter } from 'react-router';
import Home from './components/home'
import About from './components/about'
import SignIn from './components/signIn'
import UserHomePage from './pages/userHomePage'
import Navigation from './containers/navigation'
import { Redirect } from 'react-router-dom'

class Routes extends Component {

privateRoute = ({component: Component, session, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => session === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/signin', state: {from: props.location}}} />}
      />
    )
  }

  render() {
    return(
    <div>
      <Navigation />
      <Route path="/signin" component={SignIn} />
      <Route path="/about" component={About}/>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={UserHomePage}
        />
    </div>
  )}
}

export default Routes
