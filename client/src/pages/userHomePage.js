import React, { Component } from 'react'
import {connect} from 'react-redux';
import Navigation from '../containers/navigation'
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions'
import { Jumbotron } from 'reactstrap'
import stillLife from '../images/stillLife.jpg'

const backgroundImage = {
  backgroundImage: "url(" + { stillLife } + ")"
}

class UserHomePage extends Component {
  render() {
     const username = this.props.user.users.user.username
     const email = this.props.user.users.user.email
     const image = this.props.user.users.user.image
    return(
      <div>
        <Jumbotron style={{textAlign: "center"}} style={{backgroundImage}}>
          <h1>Welcome {username}!</h1>
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
