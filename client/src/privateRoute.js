import React, {Component} from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, authenticated, ...rest}) => {

  return (
  <Route
    {...rest}
    render={(props) => authenticated === true
      ? <Component {...props} />
      : <Redirect to={{pathname: '/signin', state: {from: props.location}}} />}
  />
)

}

export default PrivateRoute
//<Redirect to={{pathname: '/signin', state: {from: props.location}}} />
