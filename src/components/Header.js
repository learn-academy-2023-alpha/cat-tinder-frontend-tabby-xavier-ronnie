import "/Users/learnacademy/Desktop/cat-tinder-frontend/src/components/Header.css"
import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import cats from '../mockCats';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Your Cats
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Your Matches</DropdownItem>
                <DropdownItem>Favorites</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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