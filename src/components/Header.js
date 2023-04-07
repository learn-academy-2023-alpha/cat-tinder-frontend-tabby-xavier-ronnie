
import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import cats from '../mockCats';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
} from 'reactstrap';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <div>
    <MDBIcon icon='cat' />
      <Navbar dark expand="lg" className="bg-danger">
        <NavbarBrand href="/">Meow Match</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/cats">Cats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/new">
                New Cat
              </NavLink>
            </NavItem>
          
          </Nav>
          
          <NavbarText>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
    </>
  );
}


export default Header