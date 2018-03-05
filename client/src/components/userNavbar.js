import React, { Component} from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as TopNav } from 'react-router-dom'

 class UserNavbar extends Component {
  render() {
  return(
    <div>
    <Navbar className="navbar navbar-expand-lg bg-dark" >
      <NavbarBrand><TopNav to="/:user_id/signout">Sign Out</TopNav></NavbarBrand>
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

export default UserNavbar
