import React from 'react'
import './IndicadorVistaCompleta.css'

const IndicadorVistaCompleta = () => {
    return (
        <div>
            <h2 className='d-block text-left'>Indicador # 1</h2>
            <article className='container-fluid border col-8 g-0 d-flex completa'>
                <div className='border-end border-bottom border-dark'>Proyecto</div>
                <div className='fecha border-bottom border-dark'>
                    <span>Mes</span>
                    <span>Año</span>
                </div>
                <div className='border-end border-bottom border-dark'>Servicio contratado</div>
                <div className='border-bottom border-dark'>Multa</div>
                <div className='border-end border-dark'>% Cumplimiento</div>
                <div>Comentarios</div>
            </article>
        </div>
    )
}

export default IndicadorVistaCompleta
