import React from 'react'
import { NavLink as TopNav } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const lightText = {
  color: 'white'
}

const WelcomeNavbar = () => {
    return (
      <div>

      <Navbar className="navbar navbar-expand-lg bg-dark" toggleable>

        <NavbarToggler />
        <NavbarBrand style={lightText} ><h3>Potluck Planner</h3></NavbarBrand>
        <Container>
        <Collapse navbar>
          <Nav className="mr-auto ml-auto" navbar>
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
    </Container>
      </Navbar>

    </div>
    )
}

export default WelcomeNavbar
