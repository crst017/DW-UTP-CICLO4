import React from 'react';
import './Interfaz.css';

const Interfaz = () => {
    return (
        <div className='container'>
            {/* <nav className='nav'>
                <h2>Centralizador de indicadores</h2>
                <a href="">Cerrar sesión</a>
            </nav> */}

            <div className="cont-card">
                <a className='card' href="/">
                    <div className="img"></div>
                    <h2>Ingresar sus datos</h2>
                </a>
                <a className="card" href="/indicadores">
                    <div className="img"></div>
                    <h2>Consultar indicadores</h2>
                </a>
            </div>

            {/* <footer className='footer'>
                <div className="foo">
                    <span className="Pri">Privacidad</span>
                    <span className="Ter">Términos y condiciones</span>
                    <span className="Der">Derechos reservados @ 2021</span>
                </div>
            </footer> */}
        </div>
    )
}

export default Interfaz