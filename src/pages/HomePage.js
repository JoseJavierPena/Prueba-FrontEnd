import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/loginComponents/LoginButton";

// Pagina de inicio que muestra el boton login
export default function HomePage() {
  const { isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div>
        <main className="container">
          <div className="bg-light p-5 rounded mt-3">
            <h1>Prueba Front-End</h1>
            <p className="lead">Prueba para la vacante de Front-End.</p>
            <LoginButton />
          </div>
        </main>
      </div>
    )
  );
}
