import React from 'react'
import './Filtro.css'

const Filtro = () => {
    return (
        <section className="filtro card col-3">

            <h5 className="font-weight-bold mb-2 card-header">Empresa</h5>
            <div className="form-check">
                <input type="checkbox" className="form-check-input filled-in" id="new"/>
                <label className="form-check-label text-capitalize" htmlFor="new">empresa A</label>
            </div>

            <div className="form-check">
                <input type="checkbox" className="form-check-input filled-in" id="used"/>
                <label className="form-check-label text-capitalize" htmlFor="used">Empresa B</label>
            </div>

            <div className="form-check">
                <input type="checkbox" className="form-check-input filled-in" id="collectible"/>
                <label className="form-check-label text-capitalize" htmlFor="collectible">Empresa C</label>
            </div>

            <div className="form-check">
                <input type="checkbox" className="form-check-input filled-in" id="renewed"/>
                <label className="form-check-label text-capitalize" htmlFor="renewed">Empresa D</label>
            </div>

            <h5 className="font-weight-bold mb-0 mt-2 card-header">Año</h5>
            <select className="form-select" aria-label="Default select example" defaultValue={"Seleccionar año"}>
                <option disabled={true}>Seleccionar año</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </select>
            
            
            <h5 className="font-weight-bold mb-0 card-header">Mes</h5>
            <select className="form-select px-3" aria-label="Default select example" defaultValue={"Seleccionar mes"}>
                <option disabled={true}>Seleccionar mes</option>
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

            <button className="btn btn-secondary">Filtrar</button>
            
        </section>
    )
}

export default Filtro

