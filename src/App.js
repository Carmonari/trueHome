import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ChooseForm from './components/Forms/ChooseForm';
import PrecioForm from './components/Forms/PrecioForm';
import DireccionForm from './components/Forms/DireccionForm';
import PropietarioForm from './components/Forms/PropietarioForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/choose/:id" component={ChooseForm} />
          <Route exact path="/precio-form/:id" component={PrecioForm} />
          <Route exact path="/direccion-form/:id" component={DireccionForm} />
          <Route exact path="/propietario-form/:id" component={PropietarioForm} />
        </div>
      </Router>
    );
  }
}

export default App;
