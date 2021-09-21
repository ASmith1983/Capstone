
import React from 'react';
import ShowVehicles from './components/ShowVehicles';
import ShowUsers from './components/ShowUsers';
import ShowServices from './components/ShowServices';
import UserForm from './components/UserForm';
import VehicleForm from './components/VehicleForm';
import ServiceForm from './components/ServiceForm';
import ShowVehicleDetails from './components/ShowVehicleDetails';
import VehicleUpdate from './components/VehicleUpdate';
import ShowServiceDetails from './components/ShowServiceDetails';
import ServiceUpdate from './components/ServiceUpdate';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBarMenu';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={ShowUsers} />
            <Route exact path="/vehicles" component={ShowVehicles} />
            <Route exact path="/user/vehicles/:id/" component={ShowVehicleDetails} />
            <Route exact path="/user/vehicles/:id/update" component={VehicleUpdate} />
            <Route exact path="/services" component={ShowServices} />
            <Route exact path="/user/vehicles/service/:id/" component={ShowServiceDetails} />
            <Route exact path="/user/vehicles/services/:id/update" component={ServiceUpdate} />
            <Route exact path="/userform" component={UserForm} />
            <Route exact path="/vehicleform" component={VehicleForm} />
            <Route exact path="/serviceform" component={ServiceForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
