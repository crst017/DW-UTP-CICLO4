// import Header from './components/Header';
// import Footer from './components/Footer';
import React from 'react';
import './Landing.css';
import adv1 from './img/addbanner.jpg';

export default function Landing() {
    return (
        <div className='landing'>
            <div className = 'banner'>
                <img src={adv1} className='img-fluid' alt="banner" />
            </div>
            <div className="cont-card">
                <span className='card card-home' href="/">
                    <h2>Trazabilidad</h2>
                    <p>Para el área de calidad, no hay mejor
                        herramienta disponible que un histórico 
                        del desempeño de los servicios prestados a un 
                        cliente, como lo es nuestro Centralizador. 
                    </p>
                </span>

                <span className="card card-home" href="/">
                    <h2>Accesibilidad</h2>
                    <p>Un líder de gestión contará siempre con disponibilidad 
                        de nuestro servicio las 24 horas/7 días de la semana. Estamos 
                        aliados estratégicamente con los mejores proveedores para 
                        darles a nuestros clientes una certeza llena de tranquilidad. 
                    </p>
                </span>

                <span className="card card-home" href="/">
                    <h2>Versatilidad</h2>
                    <p>Imitando las ventajas de un ERP, cada cliente 
                        cuenta con una flexibilidad única para registrar, 
                        editar, organizar, filtrar o borrar información de 
                        todos sus proyectos. 
                    </p>
                </span>

            </div>
        </div>
    )
}