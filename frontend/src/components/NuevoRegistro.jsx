import React from 'react'
import './NuevoRegistro.css'

const NuevoRegistro = () => {
    return (

        <div className="container-fluid col-6 my-5 registro">
        
        <h2>Registrar nuevo indicador</h2>
        <section class="container-fluid card my-5 g-0 p-4 px-5 registro">

            <label class="font-weight-bold mb-0">Empresa</label>
            <select class="form-select solo" aria-label="Default select example">
                <option selected>Empresa</option>
                <option value="2021">Empresa A</option>
                <option value="2020">Empresa B</option>
                <option value="2019">Empresa C</option>
                <option value="2018">Empresa D</option>
            </select>
            
            <div className="doble-col">
                
                <label class="font-weight-bold mb-0">Año
                <select class="form-select" aria-label="Default select example">
                    <option selected>Año</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
                </label>
            
            <label class="font-weight-bold mb-0">Mes
            <select class="form-select px-3" aria-label="Default select example">
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

            <div className="doble-col">
            <label class="font-weight-bold mb-0 mt-2">Servicio
            <select class="form-select" aria-label="Default select example">
                <option selected>Servicio</option>
                <option value="2021">Telefonia</option>
                <option value="2020">Internet</option>
                <option value="2019">Television</option>
            </select>
            </label>

            <label class="font-weight-bold mb-0 mt-2">Indicador
            <select class="form-select" aria-label="Default select example">
                <option selected>Indicador</option>
                <option value="2021">Retencion clientes</option>
                <option value="2020">Peticiones resueltas</option>
                <option value="2019">Solución mesa ayuda</option>
            </select>
            </label>
            </div>
            
            <label class="font-weight-bold solo">¿Fue multado?
                <select class="form-select" aria-label="Default select example">
                    <option selected>Multa</option>
                    <option value="2021">Si</option>
                    <option value="2020">No</option>
                </select>
            </label>

            <div className="doble-col">
                <label class="font-weight-bold">% Cumplimiento
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="0% - 100%" required></input>
                        <label htmlFor="floatingEmail">Cumplimiento</label>
                    </div>
                </label>

                <label class="font-weight-bold">Valor multa
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingEmail" placeholder="1000000" required></input>
                    <label htmlFor="floatingEmail">Valor multa</label>
                </div>
                </label>
            </div>


            <label for="exampleFormControlTextarea1">Comentarios</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            <div className="doble-col">
                <button className="btn btn-secondary">Guardar</button>
                <button className="btn btn-secondary">Cancelar</button>
            </div>
            
        </section>
        </div>
    )
}

export default NuevoRegistro
