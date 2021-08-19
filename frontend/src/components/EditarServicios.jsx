import React, { Component } from 'react';
import './editar.css';
import axios from 'axios';
import ServiceCard from './ServiceCard';
import './serviceCard.css'

const capitalize = function( string ) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            id:'',
            year: '',
            month: '',
            compliance: 0,
            services: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
        [name]: value
        });
    }


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

    async componentDidMount() {
        this.fetchServices();
    }

    fetchServices() {
        const idCompany = "6112dbe26288fa269c94668f";
        fetch(`http://localhost:3001/api/service/getServices/${idCompany}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ services: data });
            });
    }

    createCards() {
        console.log(this.state.services)
        for (const service of this.state.services) {
            console.log(service, "ejecuta");
            return (
                <ServiceCard className="row" key={service._id} service = { service }/>
            )
        }
    }
    

    render() {
        return (
            <div id="service-container" className="container-fluid col-6 my-5 registro">
                <h2>Editar servicios</h2>
                {
                    this.state.services.map( service => {
                        return (
                            <ServiceCard className="row" key={service._id} service = { service }/>
                        )
                    }) 
                }   
            </div>
        )
    }
}

export default App;
