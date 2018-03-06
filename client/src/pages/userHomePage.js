import React, { Component } from 'react'
import {connect} from 'react-redux';
import Navigation from '../containers/navigation'
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions'


class UserHomePage extends Component {

  componentWillMount() {
    debugger
     if(this.props.user.users.user) {
       const credentials = {email: this.props.user.users.user.email, password: this.props.user.users.user.password }
       this.props.actions.signIn(credentials)
     }
  }

  render() {

    // const username = this.props.user.users.user.username
    // const email = this.props.user.users.user.email
    // const image = this.props.user.users.user.image
    return(
      <div>
        <h1>Welcome!</h1>

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
