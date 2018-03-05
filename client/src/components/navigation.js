import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as TopNav } from 'react-router-dom'
import { connect } from 'react-redux'

class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Navbar className="navbar navbar-expand-lg bg-dark" >
          <NavbarBrand><TopNav to="/">Home</TopNav></NavbarBrand>
            <Nav navbar className="list-unstyled ml-auto" >
              <NavItem>
                <NavLink>
                  <TopNav to="/signup">Sign Up</TopNav>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <TopNav to="/about">About</TopNav>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <TopNav to="/signin">Sign In</TopNav>
                </NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {logged_in: state.session};
}

export connect(mapStateToProps, null)(Navigation)
