import React, { Component } from 'react';
import './editar.css';
import axios from 'axios';
import './serviceCard.css';
import uniqid from 'uniqid';
import Swal from 'sweetalert2';

const capitalize = function( string ) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const swal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-primary'
    },
    buttonsStyling: false
});

class App extends Component {

    constructor() {
        super();
        this.state = {
            indName : '',
            indicators: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
        [name]: value
        });
    }

    // console.log(service)

    deleteIndicator(id) {
        console.log(id)
        axios.put(`https://centralizadorindicadores-back.herokuapp.com/api/indicator/deleteIndicator/${id}`)
            .then(data => {
                this.fetchIndicators();
                console.log(data);
                swal.fire(
                    'Eliminado!',
                    'El indicador ha sido marcado como false',
                    'success'
                );
            })
            .catch( err => {
                console.log(err,"err")
                swal.fire(
                    'Error!',
                    'El indicador ya habia sido marcado como false',
                    'error'
                );
            });
    }

//     editTask(id) {
//         fetch(`https://centralizadorindicadores-back.herokuapp.com/api/register/getRegistersId/${id}`)
//           .then(res => res.json())
//           .then(data => {
//             this.setState({
//                 id: data._id,
//               year: data.year,
//               month: data.month,
//               compliance: data.compliance,
//             });
//         });
//     }

//       editTaskSend(id) {
//         fetch(`https://centralizadorindicadores-back.herokuapp.com/api/register/getRegistersId/${id}`)
//           .then(res => res.json())
//           .then(data => {


//               const body = {
//                   "_id": this.state.id,
//                   "idCompany": data.idCompany,
//                   "year": this.state.year,
//                   "month": this.state.month,
//                   "idService": data.idService,
//                   "idIndicator": data.idIndicator,
//                   "compliance": this.state.compliance,
//               }
//               console.log(body)

//               axios.put(`https://centralizadorindicadores-back.herokuapp.com/api/register/editRegister`, body)
//               .then(data => {
//                 this.fetchTasks();
//             });

//           });
//       }

    componentDidMount() {
        this.fetchIndicators();
    }

    fetchIndicators() {
        const idService = this.props.service._id;
        fetch(`https://centralizadorindicadores-back.herokuapp.com/api/indicator/getIndicator/${idService}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ indicators: data });
            });
    }

    editTask(id) {
        fetch(`https://centralizadorindicadores-back.herokuapp.com/api/indicator/getIndicatorId/${id}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            // this.setState({
            //     indName: data.indicatorName
            // });
        });
    }

    editIndicator(id) {
        console.log(id)
        const value = document.querySelector(`input[id='${id}']`);
        console.log(value)
        // if (value) {
        //     const body = {
        //         "_id" : id,
        //         "indicatorName" : value
        //     }
        //     axios.put(`https://centralizadorindicadores-back.herokuapp.com/api/indicator/editIndicator`, body)
        //         .then( data => {
        //         this.fetchIndicators();
        //         });
        // }
    }

    render() {
        return (
            <div className="card" id="service-card">
                <h5 className="card-header" id="service-header">{this.props.service.serviceName}</h5>
                <div className="card-body">
                    {
                        this.state.indicators.map ( indicator => {
                            return (
                                <div className="fila-indicador" key={ uniqid() }>
                                    <p className="card-text">{indicator.indicatorName}</p>
                                    <button className="btn btn-primary" onClick={() => this.editTask(indicator._id)} data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                                    <button className="btn btn-danger" onClick={() => this.deleteIndicator(indicator._id)}>Eliminar</button>

                                    <div className="container-modal-indicador">
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Editar Indicador</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <label htmlFor="editName" className="form-label">Nombre del indicador:</label>
                                                        <input type="text" className="form-control editName" id={indicator._id}></input>                                                  
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button onClick={ (e) => this.editIndicator(indicator._id) }type="button" className="btn btn-primary" data-bs-dismiss="modal">Guardar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        )
    }
}

export default App;