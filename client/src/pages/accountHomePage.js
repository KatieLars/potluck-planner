import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions'
import { Jumbotron, Container } from 'reactstrap'


class AccountPage extends Component {
  
  render() {
     const username = this.props.user.users.user.username
     const email = this.props.user.users.user.email
     const image = this.props.user.users.user.image
    return(
      <div className="container-full-bg">
        <Jumbotron  style={backgroundImage}>
          <Container>
            <h1>Welcome {username}!</h1>
          </Container>
        </Jumbotron>
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
