import React, {Component} from 'react';
import { connect } from 'react-redux'
import WelcomeNavbar from '../components/welcomeNavbar'

class Navigation extends React.Component {

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
  return {logged_in: state.session};
}

export default connect(mapStateToProps, null)(Navigation)
