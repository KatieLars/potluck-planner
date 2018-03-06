import React, { Component } from 'react'
import {connect} from 'react-redux';
import Navigation from '../containers/navigation'
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions'


class UserHomePage extends Component {

  componentWillMount() {
    if(this.props.user.users.user.email) {
      const credentials = {email: this.props.user.users.user.email, password: this.props.user.users.user.password }
      this.props.actions.signIn(credentials)
    }else{
      this.props.actions.getUserInfo(sessionStorage.jwt)
    }
  }

  render() {
    const username = this.props.user.users.user.username
    const email = this.props.user.users.user.email
    const image = this.props.user.users.user.image
    return(
      <div>
        <h1>Welcome {username}!</h1>

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
