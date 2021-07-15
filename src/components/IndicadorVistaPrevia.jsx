import React from 'react';
import './IndicadorVistaPrevia.css';

const IndicadorVistaPrevia = () => {
    return (
        <div className='container-fluid border col-8 d-flex justify-content-between align-items-center g-0 my-5'>
            <article className='row h-100 g-0 col-9 d-flex'>
                <span className='col border-end border-dark'>Indicador</span>
                <span className='col border-end border-dark'>Empresa/Proyecto</span>
                <div className='col border-end border-dark h-100 d-flex flex-column'>
                    <span className='h-50'>Mes</span>
                    <span className='h-50'>Año</span>
                </div>
            </article>
            <button className='btn btn-dark col-2 h-50 m-5'>Ver</button>
        </div>
    )
}

export default IndicadorVistaPrevia
