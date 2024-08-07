import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavbarComponent = () => {
  return (
    <Navbar className="navbar-custom" expand="md">
      <NavbarBrand href="/" className="navbar-brand">Travel Destinations</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/" className="nav-link">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/destinations" className="nav-link">Destinations</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/add-review" className="nav-link">Add Review</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
