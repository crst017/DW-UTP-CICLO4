import React from 'react';
import './editar.css';
const EditarRegistros = () => {
    return (
        <div className="container ">
            

        <div className="titulo">
            <h1>Editar datos </h1>
        </div>



            <div className="row tabla-datos">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-condensed">
                            <thead className="text-center cabecera">
                                <tr>
                                    <th>Compañia</th>
                                    <th>Servicio</th>
                                    <th>Indicador</th>
                                    <th></th>
                                </tr>

                        
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td>Claro</td>
                                    <td>telefonia</td>
                                    <td>15.2%</td>
                                    <td>
                                        <div className="text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-primary btnEditar" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Claro</td>
                                    <td>telefonia</td>
                                    <td>15.2%</td>
                                    <td>
                                        <div className="text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-primary btnEditar" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Claro</td>
                                    <td>telefonia</td>
                                    <td>15.2%</td>
                                    <td>
                                        <div className="text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-primary btnEditar" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>Claro</td>
                                    <td>telefonia</td>
                                    <td>15.2%</td>
                                    <td>
                                        <div className="text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-primary btnEditar" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>Claro</td>
                                    <td>telefonia</td>
                                    <td>15.2%</td>
                                    <td>
                                        <div className="text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-primary btnEditar" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>


                                <tr>
                                    <td>Claro</td>
                                    <td>telefonia</td>
                                    <td>15.2%</td>
                                    <td>
                                        <div className="text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-primary btnEditar" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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


        </div>



    
    
    )
}
export default EditarRegistros
