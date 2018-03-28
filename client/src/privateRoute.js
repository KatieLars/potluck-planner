import React, {Component} from 'react'
import { Redirect, Route } from 'react-router-dom'

const checkAuth = (token) => {
  if(!token) {
    return false
  }else{
    return true
  }
}

const PrivateRoute = ({component: Component, ...rest}) => { return (
  <Route {...rest} render={(props) => (
    checkAuth(sessionStorage.jwt)
    ? <Component {...props} />
    : <Redirect to='/signin' />
    )
  }
  />
)}

export default PrivateRoute
