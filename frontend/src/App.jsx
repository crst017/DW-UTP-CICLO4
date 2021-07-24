import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Interfaz from './components/Interfaz';
import FormLogin from './components/FormLogin';
import FormRegistro from './components/FormRegistro';
import IndicadorVistaCompleta from './components/IndicadorVistaCompleta';
import Filtro from './components/Filtro';
import Tabla from './components/Tabla';
import NuevoRegistro from './components/NuevoRegistro';

import React from 'react';
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './components/login.css'

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Header/>
      <Router history={history}>
        <Switch>
          <Route path='/login' component={FormLogin} />
          <Route path="/registro" component={FormRegistro} />
          <Route path="/completa" component={IndicadorVistaCompleta}/>

          <Route path="/indicadores">
            <section className="container-fluid indicadores col-10 g-0 d-flex" id="indicadores">
              <Filtro className="col"></Filtro>
              <Tabla></Tabla>
            </section>
          </Route>
            
          <Route path="/nuevo">
            <NuevoRegistro></NuevoRegistro>
          </Route>

          <Route path="/interfaz" component={Interfaz}/>
          <Route path="/">
            <Interfaz/>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;