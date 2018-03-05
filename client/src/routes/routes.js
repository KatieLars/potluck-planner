import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import SignIn from './components/signIn'
import UserHomePage from './pages/userHomePage'
import Navigation from './containers/navigation'
import { connect } from 'react-redux'

// const PrivateRoute = ({component: Component, authenticated, ...rest}) => {
//     return (
//       <Route
//         {...rest}
//         render={(props) => authenticated === true
//           ? <Component {...props} />
//           : <Redirect to={{pathname: '/signin', state: {from: props.location}}} />}
//       />
//     )
// }

class Routes extends Component {


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

const mapStateToProps = (state) => {
  return {authenticated: state.sessions}
}

export default connect(mapStateToProps, null)(Routes)

// <PrivateRoute authenticated={this.props.authenticated} path="/home" component={UserHomePage}
//   />
