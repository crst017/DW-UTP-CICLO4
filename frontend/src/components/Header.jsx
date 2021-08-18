import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [loged, setLoged] = useState();

  useEffect(() => {
    setLoged(!!localStorage.getItem("token"));
  });

  return (
    <header className="header col-12 d-flex justify-content-center">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center col-9">
        <a className="fs-4 text-light text-decoration-none" href="/interfaz">
          Centralizador de indicadores
        </a>

        <nav className="d-flex align-items-center mt-2 mt-md-0 ms-md-auto">
          {!loged ? (
            <a
              className="me-3 px-3 text-light text-decoration-none"
              href="/login"
            >
              Iniciar sesión
            </a>
          ) : (
            <a
              className="me-3 px-3 text-light text-decoration-none"
              href="/" onClick={localStorage.removeItem('token')}
            >
              Cerrar sesión
            </a>
          )}

          <a
            className="me-3 px-3 text-light text-decoration-none"
            href="/registro"
          >
            Registrarse
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
