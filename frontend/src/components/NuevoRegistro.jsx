import React, { useState, useEffect } from 'react'
import axios from 'axios';
import uniqid from 'uniqid';
import './NuevoRegistro.css'
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

const NuevoRegistro = () => {
    const history = useHistory();

    const [ company, setCompany ] = useState({});
    const [ services, setServices ] = useState([]);
    const [ indicators, setIndicators ] = useState([]);
    const [ idService, setidService ] = useState("");
    const [ idIndicator, setidIndicator ] = useState("");
    const [ idCompany, setidCompany] = useState();
    const [ year, setYear] = useState("");
    const [ month, setMonth] = useState("");
    const [ compliance, setCompliance] = useState();

    const [token, setToken] = useState(localStorage.getItem("token"));
    useEffect(() => {
        setToken(localStorage.getItem("token"))
        if (token == null) {
          return;
        } else {
          let jwtData = token.split(".")[1];
          let decodedJwtJsonData = window.atob(jwtData);
          let decodedJwtData = JSON.parse(decodedJwtJsonData);
          setidCompany(decodedJwtData.idCompany);
            console.log(decodedJwtData);
          //   return role;
        }
      }, [token]);

    const swal = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
    });

    const getCompany = async () => {
        let company = await axios.get('https://centralizadorindicadores-back.herokuapp.com/api/company/getCompany/' + idCompany);
        console.log(company);
        setCompany(company.data);
        setidCompany(company.data._id);
    }

    const getServices = async () => {
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

    const chargeData = () => {
        getCompany();
        getServices();
    }

    const createRegister = async (e) => {
        e.preventDefault();
        const comments =  document.querySelector('.comments').value || '';
        
        if (!idCompany ||
            !idService ||
            !idIndicator ||
            !year ||
            !month ||
            !compliance) 
            return console.log("NOP")
        
        const body = { 
            "idCompany" : idCompany, 
            "idService" : idService,
            "idIndicator" : idIndicator,
            "year" : year,
            "month" : month,
            "compliance" : Number(compliance),
            "comments" : comments,
        }

        const creado = await axios.post('https://centralizadorindicadores-back.herokuapp.com/api/register/newRegister', body);
        console.log(creado.status)
        if (creado.status === 200) {
            // resetForm();
            swal.fire(
                'Creado!',
                'El nuevo registro ha sido guardado',
                'success'
            );
        } else {
            swal.fire(
                'Error!',
                'El registro no pudo ser guardado',
                'error'
            );
        }
    }

    const handleCancelar = () => {
        history.push('/interfaz')
    }
    window.onload = chargeData;

    return (

        <div className="container-fluid col-6 my-5 registro">
        
        <h2>Nuevo Registro</h2>
        <form className="container-fluid card my-4 g-0 p-4 px-5 registro" 
            onSubmit={ (e) => createRegister(e) }>

            <h3 className="card-header font-weight-bold mt-2 mb-4 text-center">{company.companyName}</h3>
            
            <div className="doble-col">
            <label className="font-weight-bold mb-0 mx-2">Servicio
            <select id="service" className="form-select" aria-label="Default select example" defaultValue={""} required onChange={ (e) => getIndicators(e) }>
                <option disabled={true} ></option>
                    {   services.map( service => <option value={service.serviceName} key={service.key} >{service.serviceName}</option> )}
            </select>
            </label>

            <label className="font-weight-bold mb-0 mx-2">Indicador
            <select className="form-select" aria-label="Default select example" defaultValue={""} required onChange={ (e) => getIndicatorID(e) }>
                <option disabled={true}></option>
                {   indicators.map( indicator => <option value={indicator.serviceName} key={indicator.key} >{indicator.indicatorName}</option> )}
            </select>
            </label>
            </div>

            <div className="doble-col">
                
                <label className="font-weight-bold mx-2">Año
                <select className="form-select" aria-label="Default select example" defaultValue={""} required onChange = { e => setYear(e.target.value) }>
                    <option defaultValue="Año" disabled={true}></option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
                </label>
            
            <label className="font-weight-bold mx-2">Mes
            <select className="form-select px-3" aria-label="Default select example" defaultValue={""} required onChange = { e => setMonth(e.target.value) }>
                <option defaultValue="Mes" disabled={true}></option>
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
            
            <div className="w-50 mx-2">
                <label className="font-weight-bold">% Cumplimiento
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingName" placeholder="Cumplimiento" onChange = { e => setCompliance(e.target.value) } required ></input>
                        <label htmlFor="floatingName">Cumplimiento</label>
                        {/* <input type="range" min="0" max="100" step="1"></input> */}
                    </div>
                </label>
            </div>

            <label htmlFor="exampleFormControlTextarea1" className="mx-2">Comentarios
                <textarea className="form-control comments" id="exampleFormControlTextarea1" rows="3"></textarea>
            </label>
            
            <div className="doble-col">
                <button className="btn btn-secondary" type="submit">Guardar</button>
                <button className="btn btn-secondary" type="reset" routerlink="interfaz" onClick={handleCancelar}>Cancelar</button>
            </div>
            
        </form>
        </div>
    )
}

export default NuevoRegistro
