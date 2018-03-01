import React from 'react'
import { NavLink as TopNav } from 'react-router-dom';
import {NavLink, Navbar, NavItem} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

class WelcomeNavbar extends React.Component{
  render() {
    return (
      <Navbar>
          <NavItem><TopNav
              to="/about"
              exact
            >About</TopNav>
          </NavItem>
          <NavItem>
            <TopNav
              to="/login"
              exact
            >Log In</TopNav>
          </NavItem>
          <NavItem>
            <TopNav
              to="/signup"
              exact
            >Sign Up</TopNav>
          </NavItem>
      </Navbar>
    )
  }
}

export default WelcomeNavbar
