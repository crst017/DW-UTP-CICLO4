import Tabla from './Tabla';

import React, { useState, useEffect } from "react";
import axios from 'axios';
import uniqid from 'uniqid';
import "./Filtro.css";

const Indicadores = () => {

    const [ company, setCompany ] = useState([]);
    const [ services, setServices ] = useState([]);
    const [ indicators, setIndicators ] = useState([]);
    const [ idService, setidService ] = useState("");
    const [ idIndicator, setidIndicator ] = useState("");
	const [idCompany, setidCompany] = useState();
	const [token, setToken] = useState(localStorage.getItem("token"));

	useEffect(() => {
		setToken(localStorage.getItem("token"));
		if (token == null) {
			return;
		} else {
			let jwtData = token.split(".")[1];
			let decodedJwtJsonData = window.atob(jwtData);
			let decodedJwtData = JSON.parse(decodedJwtJsonData);
			setidCompany(decodedJwtData.idCompany);
            chargeData(decodedJwtData.idCompany);
			// console.log(decodedJwtData.idCompany);
		}
	}, [token]);

	const getCompany = async (idCompany) => {
        let company = await axios.get('https://centralizadorindicadores-back.herokuapp.com/api/company/getCompany/' + idCompany);
        setCompany(company.data);
        setidCompany(company.data._id);
    }

	const getServices = async (idCompany) => {
        let services = await axios.get('https://centralizadorindicadores-back.herokuapp.com/api/service/getServices/' + idCompany);
        services = services.data;
        services.forEach( service => service.key = uniqid());
        setServices(services);
    }

	const getIndicators = async (event) => {

        const serviceFind = services.find( service => service.serviceName === event.target.value);
        const idService = serviceFind._id;
        setidService(idService);

        let indicators = await axios.get(`https://centralizadorindicadores-back.herokuapp.com/api/indicator/getIndicator/${idService}`);
        indicators = indicators.data;
        indicators.forEach( indicator => indicator.key = uniqid());
        setIndicators(indicators);
    }

	const getIndicatorID = async (event) => {

        const indicatorFind = indicators.find( indicator => indicator.indicatorName === event.target.value);
        const idIndicator = indicatorFind._id;
        setidIndicator(idIndicator);
    }

	const chargeData = (idCompany) => {
        getCompany(idCompany);
        getServices(idCompany);
    }

	const [ year, setYear] = useState("");
    const [ month, setMonth] = useState("");

    const filterRegister = () => {
        const body = {
            idCompany : idCompany,
            year: year || null,
            idService : idService || null,
            idIndicator : idIndicator || null,
            month : month
        }
        console.log(body)
        axios.post('https://centralizadorindicadores-back.herokuapp.com/api/register/registersFilter',body)
            .then( data=> console.log(data))
            .catch( err=> console.log(err))
    }

    return (
        <section className="container-fluid indicadores col-10 g-0 d-flex" id="indicadores">
              <div className="col">
                <section className="filtro card col-12">
                    <h5 className="font-weight-bold mb-2 card-header">
                        {company.companyName}
                    </h5>

                    <label className="font-weight-bold mb-0 mx-2">Servicio
                        <select id="service" className="form-select" aria-label="Default select example" defaultValue={"Servicio"} required onChange={(e) => getIndicators(e)}>
                            <option disabled={true} >Servicio</option>
                            {services.map(service => <option value={service.serviceName} key={service.key} >{service.serviceName}</option>)}
                        </select>
                    </label>

                    <label className="font-weight-bold mb-0 mx-2">Indicador
                        <select className="form-select" aria-label="Default select example" defaultValue={"Indicador"} required onChange={(e) => getIndicatorID(e)}>
                            <option disabled={true}>Indicador</option>
                            {indicators.map(indicator => <option value={indicator.serviceName} key={indicator.key} >{indicator.indicatorName}</option>)}
                        </select>
                    </label>



                    <h5 className="font-weight-bold mb-0 mt-2 card-header">Año</h5>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={"Seleccionar año"}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option disabled={true}>Seleccionar año</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>

                    <h5 className="font-weight-bold mb-0 card-header">Mes</h5>
                    <select
                        className="form-select px-3"
                        aria-label="Default select example"
                        defaultValue={"Seleccionar mes"}
                        onChange={(e) => setMonth(e.target.value)}
                    >
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

                    <button className="btn btn-secondary" onClick={filterRegister}>Filtrar</button>
                </section>
              </div>
              <Tabla></Tabla>
        </section>
    )
}

export default Indicadores
