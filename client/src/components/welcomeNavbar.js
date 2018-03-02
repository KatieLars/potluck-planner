import React from 'react'
import { NavLink as TopNav } from 'react-router-dom';
import { Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const WelcomeNavbar = () => {
    return (
      <div>
      <Col>
      <Navbar color="faded" light toggleable>
        <NavbarToggler />
        <NavbarBrand ><h3>Potluck Planner</h3></NavbarBrand>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><TopNav
                to="/"
                exact
              >Home</TopNav></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><TopNav
                  to="/about"
                  exact
                >About</TopNav></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><TopNav
                  to="/signup"
                  exact
                >Sign Up</TopNav></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><TopNav
                  to="/signin"
                  exact
                >Sign In</TopNav></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Col>
    </div>
    )
}

export default WelcomeNavbar
