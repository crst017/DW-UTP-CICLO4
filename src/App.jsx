import './App.css';
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
}

export default App;
