import React, { Component }  from 'react';
import { connect } from 'react-redux'
import WelcomeNavbar from '../components/welcomeNavbar'
import UserNavbar from '../components/userNavbar'
import {BrowserRouter, withRouter} from 'react-router-dom'

class Navigation extends Component {

  render() {

    if(this.props.logged_in){
      return(
        <UserNavbar />
      )
    }else{
      return (
        <WelcomeNavbar />
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {logged_in: state.sessions};
}

export default connect(mapStateToProps, null)(Navigation)
