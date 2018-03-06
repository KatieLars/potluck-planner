import React, { Component } from 'react'
import {connect} from 'react-redux';
import Navigation from '../containers/navigation'

class UserHomePage extends Component {
  render() {
    return(
      <div>
        <h1>You are logged in!</h1>
        <p>{this.props.user}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }

export default connect(mapStateToProps, null)(UserHomePage)
