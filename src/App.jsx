<<<<<<< HEAD
import './App.css';
import Interfaz from './components/Interfaz';
import FormLogin from './components/FormLogin';
import FormRegistro from './components/FormRegistro';
import IndicadorVistaPrevia from './components/IndicadorVistaPrevia';
import IndicadorVistaCompleta from './components/IndicadorVistaCompleta';
import React from 'react';
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Link to='/previa'>Previa</Link>
        <Link to='/completa'>Completa</Link>
        <Switch>
          <Route path="/login" component={FormLogin} />
          <Route path="/registro" component={FormRegistro} />
          <Route path="/previa" component={IndicadorVistaPrevia}/>
          <Route path="/completa" component={IndicadorVistaCompleta}/>
        </Switch>
      </Router>
    </div>
  );
=======
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Body from './components/Banner.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return ( <
        div className = "App" >
        <
        Header > < /Header>



        <
        Footer > < /Footer>



        <
        /div>
    );
>>>>>>> juan_galvis
}

export default App;