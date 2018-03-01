import React from 'react'
import { NavLink as TopNav } from 'react-router-dom';
import {NavLink, Navbar, NavItem} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../navbar.css'

class WelcomeNavbar extends React.Component{
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><TopNav
                to="/about"
                exact
              >About</TopNav></li>
            <li><TopNav
                to="/login"
                exact
              >Log In</TopNav></li>
            <li><TopNav
                to="/signup"
                exact
                >Sign Up</TopNav></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default WelcomeNavbar
