import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import LightText from "./welcomeNavbar.css"
class WelcomeNavbar extends Component {
  render() {
    return(
      <div>
      <Navbar className="navbar navbar-expand-lg bg-dark" toggleable>
          <NavbarToggler />
            <NavbarBrand style={LightText} ><h3>Potluck Planner</h3></NavbarBrand>
              <Container>
              <Collapse navbar>
                <Nav className="mr-auto ml-auto" navbar>
                  <NavItem>
                    <NavLink><Link
                      to="/"
                      exact
                    >Home</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link
                        to="/about"
                        exact
                      >About</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link
                        to="/signup"
                        exact
                      >Sign Up</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link
                        to="/signin"
                        exact
                      >Sign In</Link></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
      </div>
    )
  }
}

export default WelcomeNavbar
