import React, { useState } from 'react'
import './editar.css';
import axios from 'axios';
import uniqid from 'uniqid';
import FilaTablaEditar from './FilaTablaEditar';

const EditarRegistros = () => {


    const [ registers, setRegisters ] = useState([]);
    const items = []

    const getRegisters = async () => {
        const registersFetch = await axios.get('http://localhost:3001/api/register/getRegisters');
        const dataRegisters = registersFetch.data;
        dataRegisters.forEach( register => register.key = uniqid());
        setRegisters(dataRegisters);
    }
    
    const createIndicator = () => {
        for (const register of registers) {
            items.push(<FilaTablaEditar className="row" key={register._id} register={ register }/>)
        }
    }


    const eliminarDatos = async () => {
        console.log("okok")
    }

    window.onload = getRegisters;

    return (
        <div className="container ">
            <div className="titulo">
                <h1>Editar datos </h1>
            </div>
            <div>

                <table className='indicadores'>
                    <thead className="text-center">
                        <tr>
                            <th>Compañia</th>
                            <th>Servicio</th>
                            <th>Indicador</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registers.length !== 0 ? createIndicator() : console.log()
                        }
                        {
                            items
                        }
                    </tbody>
                </table>

            </div>
            <div className="container">
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Editar datos</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label for="exampleInputEmail1" className="form-label">Compañia</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                <label for="exampleInputEmail1" className="form-label">Servicio</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                <label for="exampleInputEmail1" className="form-label">Indicador</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div class="modal fade" id="Modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Eliminar datos</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ¿Está seguro que desea eliminar la información?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" >Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditarRegistros
