import React, { Component } from 'react'
import {connect} from 'react-redux';
import Navigation from '../containers/navigation'
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions'

class UserHomePage extends Component {

  componentWillMount() {
    const credentials = {email: this.props.user.users.user.email, password: this.props.user.users.user.password }
    this.props.actions.signIn(credentials)
  }

  render() {
    return(
      <div>
        <h1>You are logged in!</h1>
        <p>{this.props.user.users.user.username}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state
  }}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomePage)
