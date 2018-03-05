import {Link, withRouter, BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react'

const history = withRouter({history})

class SignOutLink extends Component {
  render() {
    debugger
    return (
      <Link to="#" onClick={(event, history) => {this.props.signOut(event, history)}}>Sign Out</Link>
    )
  }

}
  export default SignOutLink
