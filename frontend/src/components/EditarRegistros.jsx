import React, { Component } from 'react'
import './editar.css';
import axios from 'axios';

const capitalize = function( string ) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            id:'',
            service: '',
            indicator:'',
            year: '',
            month: '',
            compliance: 0,
            comments:'',
            idCompany: '',
            token: localStorage.getItem("token"),

            services: [],
            indicators: [],
            tasks: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }



    getServices() {
        fetch(`https://centralizadorindicadores-back.herokuapp.com/api/service/getService`)
            .then(res => res.json())
            .then(data => {
                this.setState({ services: data });
            });
    }

    getIndicators() {
        fetch(`https://centralizadorindicadores-back.herokuapp.com/api/indicator/getIndicators`)
            .then(res => res.json())
            .then(data => {
                this.setState({ indicators: data });
            });
    }

    getIndicatorID(event) {
        const serviceFind = this.state.services.find(service => service.serviceName === event);
        const idService = serviceFind._id;
        this.setState({ service: idService });
        fetch(`https://centralizadorindicadores-back.herokuapp.com/api/indicator/getIndicator/${idService}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ indicators: data });
                // console.log(this.state.indicators[0]);
                this.setState({ indicator: this.state.indicators[0]._id });
            });
    }

    setIndocatorId(event) {


        const indicatorFind = this.state.indicators.find(indicator => indicator.indicatorName === event);
        const idIndicator = indicatorFind._id;
        // console.log(idIndicator);

        this.setState({ indicator: idIndicator });



        // const serviceFind = this.state.services.find(service => service.serviceName === event);
        // const idService = serviceFind._id;
        // this.setState({ service: idService });
        // fetch(`https://centralizadorindicadores-back.herokuapp.com/api/indicator/getIndicator/${idService}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({ indicators: data });
        //         // console.log(this.state.indicators[0]);
        //         this.setState({ indicator: this.state.indicators[0]._id });
        //     });
    }





    deleteTask(id) {
        axios.delete(`https://centralizadorindicadores-back.herokuapp.com/api/register/deleteRegister/${id}`)
            .then(data => {
                this.fetchTasks();
            });
    }

    editTask(id) {
        fetch(`https://centralizadorindicadores-back.herokuapp.com/api/register/getRegistersId/${id}`)
          .then(res => res.json())
          .then(data => {
                // console.log(data);

            this.setState({
                id: data._id,
                service: data.idService,
                indicator: data.idIndicator,
                year: data.year,
                month: data.month,
                compliance: data.compliance,
                comments: data.comments,
            });
        });
    }

      editTaskSend(id) {
        fetch(`https://centralizadorindicadores-back.herokuapp.com/api/register/getRegistersId/${id}`)
          .then(res => res.json())
          .then(data => {

              const body = {
                  "_id": this.state.id,
                  "idCompany": "6112dbe26288fa269c94668f",
                  "year": this.state.year,
                  "month": this.state.month,
                  "idService": this.state.service,
                  "idIndicator": this.state.indicator,
                  "compliance": this.state.compliance,
                  "comments": this.state.comments,
              }

              axios.put(`https://centralizadorindicadores-back.herokuapp.com/api/register/editRegister`, body)
              .then(data => {
                // console.log( this.state.service );
                this.fetchTasks();
            });

          });
      }

    componentDidMount() {
        this.getServices();
        this.getIndicators();
        this.fetchTasks();
        if (this.token == null) {
            return;
        } else {
            let jwtData = this.token.split(".")[1];
            let decodedJwtJsonData = window.atob(jwtData);
            let decodedJwtData = JSON.parse(decodedJwtJsonData);
            this.setState({ idComapany : decodedJwtData.idCompany});
            console.log(decodedJwtData);
        }
        }

    fetchTasks() {
        const idCompany = "6112dbe26288fa269c94668f";
        fetch(`https://centralizadorindicadores-back.herokuapp.com/api/register/getRegisters/${idCompany}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ tasks: data });
                // console.log(this.state.tasks);
            });
    }

    render() {
        return (
            <div>
                <div className="container ">
                    <div className="titulo">
                        <h1>Editar datos </h1>
                    </div>
                    <div>
                        <table className='indicadores'>
                            <thead className="text-center">
                                <tr>
                                    <th>Servicio</th>
                                    <th>Indicador</th>
                                    <th>Año</th>
                                    <th>Mes</th>
                                    <th>Cumplimiento</th>
                                    <th>Comentarios</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(task => {
                                        return (
                                            <tr key={task._id}>
                                                <td>{capitalize(task.idService.serviceName)}</td>
                                                <td>{capitalize(task.idIndicator.indicatorName)}</td>
                                                <td>{task.year}</td>
                                                <td>{capitalize(task.month)}</td>
                                                <td>{task.compliance}</td>
                                                <td>{capitalize(task.comments)}</td>
                                                <td>
                                                    <button onClick={() => this.editTask(task._id)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                                    <i className="bi-pencil-fill"></i>
                                                    </button>
                                                    <button onClick={() => this.deleteTask(task._id)} className="btn btn-danger">
                                                    <i className="bi-trash-fill"></i>
                                                    </button>
                                                </td>

                                                <div className="container">
                                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="exampleModalLabel">Editar datos</h5>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <label htmlFor="editService" className="col-12 control-label"  >Servicio:
                                                                        <select className="form-select w-100" onChange={(e) => this.getIndicatorID(e.target.value)}>
                                                                            {/* <select className="form-select w-100" > */}
                                                                            <option disabled={true} ></option>
                                                                            {this.state.services.map(service => <option value={service.serviceName} key={service.key} >{service.serviceName}</option>)}
                                                                        </select>
                                                                    </label>
                                                                    <label htmlFor="editService" className="col-12 control-label"  >Indicador:
                                                                        <select className="form-select w-100" required onChange={(e) => this.setIndocatorId(e.target.value)}>
                                                                        {/* <select className="form-select w-100" > */}
                                                                            <option disabled={true} ></option>
                                                                            {this.state.indicators.map(indicator => <option value={indicator.indicatorName} key={indicator.key} >{indicator.indicatorName}</option>)}
                                                                        </select>
                                                                    </label>
                                                                    <label htmlFor="editCompliance" className="form-label">Año:</label>
                                                                    <input type="text" onChange={e => this.setState({ year: e.target.value })} value={this.state.year} className="form-control" id="editYear"></input>
                                                                    
                                                                    
                                                                    <label htmlFor="editmonth" className="col-12 control-label"  >Mes:
                                                                        {/* <input type="text" onChange={e => this.setState({ month: e.target.value })} value={this.state.month} className="form-control" id="editmonth"></input> */}
                                                                        <select onChange={e => this.setState({ month: e.target.value })} value={this.state.month} className="form-control" id="editmonth">
                                                                            <option defaultValue={this.state.month} disabled={true}></option>
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
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    <label htmlFor="editCompliance" className="form-label">Cumplimiento:</label>
                                                                    <input type="number" onChange={e => this.setState({ compliance: e.target.value })} value={this.state.compliance} className="form-control"></input>
                                                                    <label htmlFor="editCompliance" className="form-label">comentarios:</label>
                                                                    <input type="text" onChange={e => this.setState({ comments: e.target.value })} value={this.state.comments} className="form-control"></input>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                                    {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                                                    <button type="button" onClick={() => this.editTaskSend(task._id)} className="btn btn-primary">Guardar cambios</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
