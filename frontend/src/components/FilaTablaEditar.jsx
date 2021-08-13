import React from 'react';
import './EditarFila.css';

const FilaTablaEditar = (props) => {

    const { register } = props;

    const eliminarDatos = async () => {
        console.log("okok")
    }


    return (
        <tr>
            <td>{register.idService}</td>
            <td>{register.idService}</td>
            <td>{register.month}</td>
            <td>
                <div className="text-center">
                    <div className="btn-group">
                        <button className="btn btn-primary btnEditar" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                        <button className="btn btn-danger btnEditar" onclick={eliminarDatos() }>Eliminar</button>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default FilaTablaEditar
