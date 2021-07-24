import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <header className="header col-12 d-flex justify-content-center">

            <div class="d-flex flex-column flex-md-row align-items-center justify-content-center col-9">
                <a href="/" class="d-flex align-items-center text-light text-decoration-none">
                    <a class="fs-4 col-8 w-100 text-light text-decoration-none" href="/">Centralizador de indicadores</a>
                </a>

                <nav class="d-flex align-items-center mt-2 mt-md-0 ms-md-auto">
                    <a class="me-3 px-3 text-light text-decoration-none" href="/login">Iniciar sesión</a>
                    <a class="me-3 px-3 text-light text-decoration-none" href="/registro">Registrarse</a>
                </nav>
            </div>
        </header>
    )
}

export default Header