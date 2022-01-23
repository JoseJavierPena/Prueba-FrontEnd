import React from "react";
//import { NavLink } from "react-router-dom";
//import "./navbar.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbarr() {
  const { isAuthenticated, isloading } = useAuth0();

  if (isloading) return <h1>Loading...</h1>;
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Prueba Front-End</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Manteniemiento
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Departamentos</DropdownItem>
                <DropdownItem>Estudios</DropdownItem>
                <DropdownItem>Empleados</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Operaciones
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Movimientos de empleados</DropdownItem>
                <DropdownItem>Salida de empleados</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Reportes
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Listado de empleados por fecha entrada
                </DropdownItem>
                <DropdownItem>Listado nomina</DropdownItem>
                <DropdownItem>Listado de recibos empleados</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Collapse>
      </Navbar>
    </div>

    // <header classNameNameNameNameName="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    //   <a
    //     href="/"
    //     classNameNameNameNameName="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
    //   >
    //     <svg
    //       classNameNameNameNameName="bi me-2"
    //       width="40"
    //       height="32"
    //       role="img"
    //       aria-label="Bootstrap"
    //     ></svg>
    //   </a>

    //   <ul classNameNameNameNameName="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    //     <li>
    //       <NavLink
    //         classNameNameNameNameName={({ isActive }) => (isActive ? "active" : "")}
    //         to="/maintenance"
    //         classNameNameNameNameName="nav-link px-2 link-secondary"
    //       >
    //         Mantenimientos
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/operation" classNameNameNameNameName="nav-link px-2 link-dark">
    //         Operaciones
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/report" classNameNameNameNameName="nav-link px-2 link-dark">
    //         Reportes
    //       </NavLink>
    //     </li>
    //   </ul>
    // </header>
  );
}
