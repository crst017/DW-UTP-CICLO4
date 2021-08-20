import React, { useState } from 'react'
import IndicadorVistaPrevia from './IndicadorVistaPrevia';
import axios from 'axios';
import uniqid from 'uniqid';
import './Tabla.css'

const Tabla = () => {

    const [ registers, setRegisters ] = useState([]);
    const items = []

    const getRegisters = async () => {
        
        const idCompany = "6112dbe26288fa269c94668f";
        const registersFetch = await axios.get(`https://centralizadorindicadores-back.herokuapp.com/api/register/getRegisters/${idCompany}`);

        const dataRegisters = registersFetch.data;
        dataRegisters.forEach( register => register.key = uniqid());
        setRegisters(dataRegisters);
    }
    
    const createIndicator = () => {
        for (const register of registers) {
            items.push(<IndicadorVistaPrevia className="row" key={register._id} register={ register }/>)
        }
    }

    window.onload = getRegisters;
    
    return (
        <section className="container-tabla col-9">
            <h2 className="text-left mb-4">Indicadores</h2>
            <div className="tabla">
                <div className="encabezados row g-0 card card-header p-0 mb-4">
                    <span className="col-4">Servicio</span>
                    <span className="col-3">Indicador</span>
                    <span className="col-3">Mes</span>
                    <span className="col-2">Año</span>
                </div>
                {
                    registers.length !== 0 ? createIndicator() : console.log()
                }
                {
                    items
                }
            </div>
        </section>
    )
}

export default Tabla
