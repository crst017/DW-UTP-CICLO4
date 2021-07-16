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

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Header />
      <Router history={history}>
        
        <Link to='/previa'>Previa</Link>
        <Link to='/completa'>Completa</Link>
        <Switch>
          <Route path="/login" component={FormLogin} />
          <Route path="/registro" component={FormRegistro} />
          <Route path="/previa" component={IndicadorVistaPrevia}/>
          <Route path="/completa" component={IndicadorVistaCompleta}/>
          <Route path="/"><Interfaz /></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;