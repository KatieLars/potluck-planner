import {Link, withRouter, BrowserRouter } from 'react-router-dom'
import React from 'react'

const history = withRouter({history})

const SignOutLink = history => (
    debugger
    <Link to="#" onClick={(event, history) => {this.signOut(event, history)}}>Sign Out</Link>
  )

  export default SignOutLink
