import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import SignIn from './components/signIn'
import UserHomePage from './pages/userHomePage'
import Navigation from './containers/navigation'
import { connect } from 'react-redux'


const checkAuth = (token) => {
  if(!token) {
    return false
  }else{
    return true
  }
}

const PrivateRoute = ({component: Component, token, ...rest}) => {
  debugger
  return (
  <Route {...rest} render={(props) => {
    checkAuth(token) ? (
      <Component {...props} />
    )
      : (<Redirect to={{pathname: '/signin', state: {from: props.location}}} />)
    }
  }
  />)
}//last brace

class Routes extends Component {


  render() {
    return(
    <div>
    <Navigation />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/about" component={About}/>
      <Route path="/home" component={UserHomePage}
        />
      </Switch>
    </div>
  )}
}

export default Routes

// <PrivateRoute token={sessionStorage.jwt} path="/home" component={UserHomePage}
//   />
