import React from 'react';
import './Header.css';

const Header = () => {
    return (
        // <div>
        //     <header>
        //         <div className = "wrapper" >
        //         <div className = "nombrepagina" > Centralizador de Indicadores </div>
        //         <nav >
        //             <a href = "#" > Registrarse </a> 
        //             <a href = "#" > Ingresar </a> 
        //         </nav>
        //         </div>
        //     </header>
        // </div>
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Centralizador de Indicadores</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav  ">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/registro">Registrarse</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/login">Ingresar</a>
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