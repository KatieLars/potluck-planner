import React, { Component } from 'react'
import {connect} from 'react-redux';
import Navigation from '../containers/navigation'

class UserHomePage extends Component {
  render() {
    debugger
    return(
      <div>
        <h1>You are logged in!</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    testState: state
  };
}

export default connect(mapStateToProps, null)(UserHomePage)
