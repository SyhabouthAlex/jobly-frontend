import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.scss"
import UserContext from "./UserContext";

function NavBar({logout}) {
  const {currentUser} = useContext(UserContext);

  const loggedIn = () => {
    return <Nav className="ml-auto" navbar>
      <NavItem className="mx-3">
        <NavLink to="/companies">Companies</NavLink>
      </NavItem>
      <NavItem className="mx-3">
        <NavLink to="/jobs">Jobs</NavLink>
      </NavItem>
      <NavItem className="mx-3">
        <NavLink to="/profile">Profile</NavLink>
      </NavItem>
      <NavItem className="mx-3">
        <NavLink to="/" onClick={logout}>Logout</NavLink>
      </NavItem>
    </Nav>
  }

  const loggedOut = () => {
    return <Nav className="ml-auto" navbar>
      <NavItem className="mx-3">
        <NavLink to="/login">Login</NavLink>
      </NavItem>
    </Nav>
  }
  
  return (
    <div className="NavBar">
      <Navbar className="border-bottom" expand="md">
        <NavLink to="/" className="navbar-brand">
          Jobly
        </NavLink>
        {currentUser ? loggedIn() : loggedOut()}
      </Navbar>
    </div>
  );
}

export default NavBar;