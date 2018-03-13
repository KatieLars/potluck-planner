import React, { Component} from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, Button } from 'reactstrap';
import { NavLink as TopNav, Link, BrowserRouter, withRouter } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import * as sessionActions from '../actions/sessionActions'


 class UserNavbar extends Component {

  signOut = (event) => {
    event.preventDefault()
    this.props.actions.signOut()
  }

  render() {

  return(
    <div>
    <Navbar className="navbar navbar-expand-lg bg-dark" >
      <NavbarBrand><Link to="#" onClick={(event) => this.signOut(event)}>Sign Out</Link></NavbarBrand>
        <Nav navbar className="list-unstyled ml-auto" >
        <NavItem>
          <NavLink>
            <TopNav to="/potlucks/new">New Potluck</TopNav>
          </NavLink>
        </NavItem>
          <NavItem>
            <NavLink>
              <TopNav to="/potlucks">Your Potlucks</TopNav>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <TopNav to="/recipes/new">New Recipe</TopNav>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <TopNav to="/recipes">Your Recipes</TopNav>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <TopNav to="/friends">Friends</TopNav>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <TopNav to="/account">Account</TopNav>
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

const mapStateToProps = (state) => {
  return {
    user: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNavbar)
