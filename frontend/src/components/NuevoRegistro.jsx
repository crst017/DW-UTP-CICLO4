import React from 'react'
import './NuevoRegistro.css'

const NuevoRegistro = () => {

    return (

        <div className="container-fluid col-6 my-5 registro">
        
        <h2>Registrar nuevo indicador</h2>
        <section className="container-fluid card my-5 g-0 p-4 px-5 registro">

            <h3 className="card-header font-weight-bold mt-2 mb-4 text-center">Empresa</h3>
            
            <div className="doble-col">
            <label className="font-weight-bold mb-0 mt-2">Servicio
            <select className="form-select" aria-label="Default select example">
                <option selected>Servicio</option>
                <option value="2021">Telefonia</option>
                <option value="2020">Internet</option>
                <option value="2019">Television</option>
            </select>
            </label>

            <label className="font-weight-bold mb-0 mt-2">Indicador
            <select className="form-select" aria-label="Default select example">
                <option selected>Indicador</option>
                <option value="2021">Retencion clientes</option>
                <option value="2020">Peticiones resueltas</option>
                <option value="2019">Solución mesa ayuda</option>
            </select>
            </label>
            </div>

            <div className="doble-col">
                
                <label className="font-weight-bold mb-0">Año
                <select className="form-select" aria-label="Default select example">
                    <option selected>Año</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
                </label>
            
            <label className="font-weight-bold mb-0">Mes
            <select className="form-select px-3" aria-label="Default select example">
                <option selected>Mes</option>
                <option value="enero">Enero</option>
                <option value="febrero">Febrero</option>
                <option value="marzo">Marzo</option>
                <option value="abril">Abril</option>
                <option value="mayo">Mayo</option>
                <option value="junio">Junio</option>
                <option value="julio">Julio</option>
                <option value="agosto">Agosto</option>
                <option value="septiembre">Septiembre</option>
                <option value="octubre">Octubre</option>
                <option value="noviembre">Noviembre</option>
                <option value="diciembre">Diciembre</option>
            </select>
            </label>
            </div> 
            
            <div className="w-50">
                <label className="font-weight-bold">% Cumplimiento
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="0% - 100%" required></input>
                        <label htmlFor="floatingEmail">Cumplimiento</label>
                    </div>
                </label>
            </div>

            <label for="exampleFormControlTextarea1">Comentarios</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            <div className="doble-col">
                <button className="btn btn-secondary">Guardar</button>
                <button className="btn btn-secondary">Cancelar</button>
            </div>
            
        </section>
        </div>
    )
}

export default NuevoRegistro
