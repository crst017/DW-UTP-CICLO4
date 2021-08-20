import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Interfaz from './components/Interfaz';
import Landing from './components/Landing';
import FormLogin from './components/FormLogin';
import FormRegistro from './components/FormRegistro';
// import Filtro from './components/Filtro';
// import Tabla from './components/Tabla';
import NuevoRegistro from './components/NuevoRegistro';
import EditarRegistros from './components/EditarRegistros';
import EditarServicios from './components/EditarServicios';

import Indicadores from './components/Indicadores';

import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './components/login.css'
import ProtectedRoute from './services/ProtectedRoute'

function App() {
  const [loged, setLoged] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setLoged(!!localStorage.getItem("token"));
    if (loged) {
      document.getElementById('sesion').innerHTML = 'Cerrar sesión';
    } else {
      document.getElementById('sesion').innerHTML = 'Iniciar sesión';
    }
  }, [loged]);

  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path='/login' component={FormLogin} />
          <Route path="/registro" component={FormRegistro} />

          <ProtectedRoute exact path="/indicadores" component = {Indicadores} auth={ loged }/>

          {/* <Route path="/indicadores">
            <section className="container-fluid indicadores col-10 g-0 d-flex" id="indicadores">
              <Filtro className="col"></Filtro>
              <Tabla></Tabla>
            </section>
          </Route> */}
            
          <ProtectedRoute exact path="/nuevo" component = {NuevoRegistro} auth={ loged }/>
          {/* <Route path="/nuevo" auth={ isAuthenticated }>
            <NuevoRegistro></NuevoRegistro>
          </Route> */}

          <ProtectedRoute exact path="/editar" component = {EditarRegistros} auth={ loged }/>
          {/* <Route path="/editar">
            <EditarRegistros></EditarRegistros>
          </Route>*/}

          <ProtectedRoute exact path="/editarServicio" component = {EditarServicios} auth={ loged }/>
          {/*<Route path="/editarServicio">
            <EditarServicios></EditarServicios>
          </Route> */}

          {/* <Route path="/landing">
            <Landing></Landing>
          </Route> */}

          <Route path="/interfaz" exact component = {Interfaz} auth={ loged }/>
          {/* <Router path = "/landing" component = {Landing}/> */}

          <Route path="/">
            <Landing/>
          </Route>

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;