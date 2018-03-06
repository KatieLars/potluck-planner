import React, { Component } from 'react'
import {connect} from 'react-redux';
import Navigation from '../containers/navigation'

class UserHomePage extends Component {

componentWillMount() {

}

propsCheck = () => {
  if (this.props.user) {

    return <p>{this.props.user.username}</p>
  }
}
  render() {
debugger
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

export default connect(mapStateToProps, null)(UserHomePage)
