import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Interfaz from './components/Interfaz';
import FormLogin from './components/FormLogin';
import FormRegistro from './components/FormRegistro';
import IndicadorVistaPrevia from './components/IndicadorVistaPrevia';
import IndicadorVistaCompleta from './components/IndicadorVistaCompleta';
import React from 'react';
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import './components/login.css'

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Header/>
      <Router history={history}>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/registro'>Registro</Link>
          </li>
          <li>
            <Link to='/previa'>Previa</Link>
          </li>
          <li>
            <Link to='/completa'>Completa</Link>
          </li>
          <li>
            <Link to='/interfaz'>Interfaz</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/login' component={FormLogin} />
          <Route path="/registro" component={FormRegistro} />
          <Route path="/previa" component={IndicadorVistaPrevia}/>
          <Route path="/completa" component={IndicadorVistaCompleta}/>
          <Route path="/interfaz" component={Interfaz}/>
          <Route path="/"><Interfaz /></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;