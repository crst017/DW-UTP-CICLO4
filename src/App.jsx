import './App.css';
import FormLogin from './components/FormLogin';
import FormRegistro from './components/FormRegistro';
import React from 'react';
import { Router, Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history'

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/login" component={FormLogin} />
          <Route path="/registro" component={FormRegistro} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
