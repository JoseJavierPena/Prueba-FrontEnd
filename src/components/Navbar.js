import React from "react";
import { Link } from "react-router-dom";

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

import LoginButton from "./loginComponents/LoginButton";
import LogoutButton from "./loginComponents/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

// Navbar con las opciones del menu que se especifican en el pdf.
export default function Navbarr() {
  const { isAuthenticated, isloading } = useAuth0();

  // Muestra un h1 con la informacion de que esta cargando
  if (isloading) return <h1>Loading...</h1>;

  return (
    // Si esta autenticado entonces mostrara el navbar
    isAuthenticated && (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand>Prueba Front-End</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Manteniemiento
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/departments">
                    Departamentos
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/studies">
                    Estudios
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/employees">
                    Empleados
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Operaciones
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Movimientos de empleados</DropdownItem>
                  <DropdownItem>Salida de empleados</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Reportes
                </DropdownToggle>
                <DropdownMenu>
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
    )
  );
}
