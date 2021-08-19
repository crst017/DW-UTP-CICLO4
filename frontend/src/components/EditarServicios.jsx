import React, { Component } from 'react';
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
            year: '',
            month: '',
            compliance: 0,
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

//     componentDidMount() {
//         this.fetchTasks();
//     }

//     fetchTasks() {
//         const idCompany = "6112dbe26288fa269c94668f";
//         fetch(`http://localhost:3001/api/register/getRegisters/${idCompany}`)
//             .then(res => res.json())
//             .then(data => {
//                 this.setState({ tasks: data });
//                 // console.log(this.state.tasks);
//             });
//     }

    

    render() {
        return (
            <div>Hola</div>
        )
    }
}

export default App;
