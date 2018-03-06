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

    return(
      <div>
        <h1>You are logged in!</h1>
        {this.propsCheck()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state
  }}

export default connect(mapStateToProps, null)(UserHomePage)
