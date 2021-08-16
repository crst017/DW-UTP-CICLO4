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


    deleteTask(id) {
        axios.delete(`http://localhost:3001/api/register/deleteRegister/${id}`)
            .then(data => {
                this.fetchTasks();
            });
    }

    editTask(id) {
        fetch(`http://localhost:3001/api/register/getRegistersId/${id}`)
          .then(res => res.json())
          .then(data => {
            this.setState({
                id: data._id,
              year: data.year,
              month: data.month,
              compliance: data.compliance,
            });
        });
    }

      editTaskSend(id) {
        fetch(`http://localhost:3001/api/register/getRegistersId/${id}`)
          .then(res => res.json())
          .then(data => {


              const body = {
                  "_id": this.state.id,
                  "idCompany": data.idCompany,
                  "year": this.state.year,
                  "month": this.state.month,
                  "idService": data.idService,
                  "idIndicator": data.idIndicator,
                  "compliance": this.state.compliance,
              }
              console.log(body)

              axios.put(`http://localhost:3001/api/register/editRegister`, body)
              .then(data => {
                this.fetchTasks();
            });

          });
      }

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks() {
        const idCompany = "6112dbe26288fa269c94668f";
        fetch(`http://localhost:3001/api/register/getRegisters/${idCompany}`)
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
                                                    <button  onClick={() => this.editTask(task._id)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                                        <i >edit</i>
                                                    </button>
                                                    <button onClick={() => this.deleteTask(task._id)} className="btn btn-danger">
                                                        <i >delete</i>
                                                    </button>
                                                </td>



                                                <div className="container">
                                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="exampleModalLabel">Editar datos</h5>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">


                                                                <label for="editCompliance" className="form-label">year:</label>
                                                                    <input type="text" onChange={e => this.setState({ year: e.target.value })} value={this.state.year} class="form-control" id="editYear"></input>
                                                                    
                                                                    <label for="editCompliance" className="form-label">month:</label>
                                                                    <input type="text" onChange={e => this.setState({ month: e.target.value })} value={this.state.month} class="form-control" id="editmonth"></input>

                                                                    <label for="editCompliance" className="form-label">compliance:</label>
                                                                    <input type="number" onChange={e => this.setState({ compliance: e.target.value })} value={this.state.compliance} class="form-control" id="editCompliance"></input>


                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" onClick={() => this.editTaskSend(task._id)} className="btn btn-primary">Save changes</button>
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
