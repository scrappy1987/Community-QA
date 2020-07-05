import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

export default function HeaderPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">TTNTC</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/discover">
                Discover
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/practice">
                Practice
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/apply">
                Apply
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Community
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink className="nav-link" to="/webinar">
                    Webinar
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="nav-link" to="/challenge">
                    Challenge
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="nav-link" to="/podcast">
                    Podcast
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="nav-link" to="/slack">
                    Slack
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
