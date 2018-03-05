import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import SignIn from './components/signIn'
import UserHomePage from './pages/userHomePage'
import Navigation from './containers/navigation'

class Routes extends Component {

PrivateRoute = ({component: Component, session, ...rest}) => {
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
      <PrivateRoute authenticated={this.props.authenticated} path="/home" component={UserHomePage}
        />
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {authenticated: state.sessions}
}

export default Routes
