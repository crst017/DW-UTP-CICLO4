import React, { Component } from 'react';
import './editar.css';
// import axios from 'axios';
import './serviceCard.css';
import uniqid from 'uniqid';

const capitalize = function( string ) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}




class App extends Component {

    constructor() {
        super();
        this.state = {
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

//     deleteTask(id) {
//         axios.delete(`http://localhost:3001/api/register/deleteRegister/${id}`)
//             .then(data => {
//                 this.fetchTasks();
//             });
//     }

//     editTask(id) {
//         fetch(`http://localhost:3001/api/register/getRegistersId/${id}`)
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
//         fetch(`http://localhost:3001/api/register/getRegistersId/${id}`)
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

//               axios.put(`http://localhost:3001/api/register/editRegister`, body)
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
        console.log(idService);
        fetch(`http://localhost:3001/api/indicator/getIndicator/${idService}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ indicators: data });
                console.log(this.state.indicators);
            });
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
                                    <button className="btn btn-primary">Editar</button>
                                    <button className="btn btn-danger">Eliminar</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default App;