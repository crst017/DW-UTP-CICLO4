import React from 'react';
import './Header.css';

const Header = () => {
    return (
        // <div>
        //     <header>
        //         <div class = "wrapper" >
        //         <div class = "nombrepagina" > Centralizador de Indicadores </div>
        //         <nav >
        //             <a href = "#" > Registrarse </a> 
        //             <a href = "#" > Ingresar </a> 
        //         </nav>
        //         </div>
        //     </header>
        // </div>
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Centralizador de Indicadores</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul class="navbar-nav  ">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/registro">Registrarse</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/login">Ingresar</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header