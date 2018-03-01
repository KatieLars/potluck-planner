import React from 'react'
import { NavLink as TopNav } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

class WelcomeNavbar extends React.Component{
  render() {
    return (
      <div>
      <Navbar color="faded" light toggleable>
        <NavbarToggler right />
        <NavbarBrand href="/">BeautyPlaces</NavbarBrand>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><TopNav
                  to="/about"
                  exact
                >About</TopNav></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
  }
}

export default WelcomeNavbar
