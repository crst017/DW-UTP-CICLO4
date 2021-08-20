import React from 'react';
import axios from 'axios';
import './EditarFila.css';

const FilaTablaEditar = (props) => {

    const { register } = props;

    const eliminarDatos = async (event) => {
        let retorno = await axios.delete(`https://centralizadorindicadores-back.herokuapp.com/api/register/deleteRegister/${register._id}`);
        console.log(retorno)
    }


    return (
        <tr>
            <td>{register._id}</td>
            <td>{register.idService}</td>
            <td>{register.month}</td>
            <td>
                <div className="text-center">
                    <div className="btn-group">
                        <button className="btn btn-primary btnEditar" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                        <button className="btn btn-danger btnEditar" onClick={eliminarDatos}>Eliminar</button>
                    </div>
                </div>
            </td>
            
            <div className="container">
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Editar datos</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label for="editYear" className="form-label">Año: {register.year}</label>
                                <input type="number" class="form-control" id="editYear"></input>
                                <label for="editMonth" className="form-label">Mes: {register.month}</label>
                                <input type="number" class="form-control" id="editMonth"></input>
                                <label for="editCompliance" className="form-label">Cumplimiento: {register.compliance}</label>
                                <input type="number" class="form-control" id="editCompliance"></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </tr>
    )
}

export default FilaTablaEditar
