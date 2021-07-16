import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <div class = "wrapper" >
                <div class = "nombrepagina" > Centralizador de Indicadores </div>
                <nav >
                    <a href = "/registro" > Registrarse </a> 
                    <a href = "/login" > Ingresar </a> 
                </nav>
                </div>
            </header>
        </div>
    )
}

export default Header