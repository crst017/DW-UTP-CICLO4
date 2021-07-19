import React from 'react'
import IndicadorVistaPrevia from './IndicadorVistaPrevia';
import './Tabla.css'

const Tabla = () => {
    return (
        <section className="container">
            <h2 className="text-left mb-4">Indicadores</h2>
            <div className="tabla">
                <div className="encabezados row g-0 card card-header p-0 mb-4">
                    <span className="col-4">Indicador</span>
                    <span className="col-3">Empresa</span>
                    <span className="col-3">Mes</span>
                    <span className="col-2">Año</span>
                </div>
                <IndicadorVistaPrevia className="row"></IndicadorVistaPrevia>
                <IndicadorVistaPrevia className="row"></IndicadorVistaPrevia>
                <IndicadorVistaPrevia className="row"></IndicadorVistaPrevia>
                <IndicadorVistaPrevia className="row"></IndicadorVistaPrevia>
                <IndicadorVistaPrevia className="row"></IndicadorVistaPrevia>
                <IndicadorVistaPrevia className="row"></IndicadorVistaPrevia>
                <IndicadorVistaPrevia className="row"></IndicadorVistaPrevia>
                <IndicadorVistaPrevia className="row"></IndicadorVistaPrevia>
                <IndicadorVistaPrevia className="row"></IndicadorVistaPrevia>
            </div>
        </section>
    )
}

export default Tabla
