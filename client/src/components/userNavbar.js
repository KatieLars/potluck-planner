import React, { Component} from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, Button } from 'reactstrap';
import { NavLink as TopNav, Link, BrowserRouter, withRouter } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import * as sessionActions from '../actions/sessionActions'
import SignOutLink from './signOutLink'

 class UserNavbar extends Component {

  signOut = (event, history) => {
    event.preventDefault()
    this.props.actions.signOut()
    debugger
    history.push("/")
  }

  render() {
  return(
    <div>
    <Navbar className="navbar navbar-expand-lg bg-dark" >
      <NavbarBrand><SignOutLink signOut={this.signOut}/></NavbarBrand>
        <Nav navbar className="list-unstyled ml-auto" >
          <NavItem>
            <NavLink>
              <TopNav to="/:user_id/potlucks">Your Potlucks</TopNav>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <TopNav to="/:user_id/recipes">Your Recipes</TopNav>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <TopNav to="/:user_id/friends">Friends</TopNav>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <TopNav to="/:user_id/account">Account</TopNav>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
)}}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(UserNavbar)
