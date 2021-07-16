import './App.css';
import IndicadorVistaPrevia from './components/IndicadorVistaPrevia';
import IndicadorVistaCompleta from './components/IndicadorVistaCompleta';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/previa'>Previa</Link>
        <Link to='/completa'>Completa</Link>
        <Switch>  
          <Route path="/previa" component={IndicadorVistaPrevia}/>
          <Route path="/completa" component={IndicadorVistaCompleta}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
