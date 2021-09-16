
import React from 'react';
import ShowVehicles from './components/ShowVehicles';
import ShowUsers from './components/ShowUsers';
import ShowServices from './components/ShowServices';
import UserForm from './components/UserForm';
import VehicleForm from './components/VehicleForm';
import ServiceForm from './components/ServiceForm';
import ShowVehicleDetails from './components/ShowVehicleDetails';
import ShowServiceDetails from './components/ShowServiceDetails';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBarMenu';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
            <Route exact path="/users" component={ShowUsers} />
            <Route exact path="/vehicles" component={ShowVehicles} />
            <Route exact path="/user/vehicles/:id/" component={ShowVehicleDetails} />
            <Route exact path="/services" component={ShowServices} />
            <Route exact path="/user/vehicle/services/:id/" component={ShowServiceDetails} />
            <Route exact path="/userform" component={UserForm} />
            <Route exact path="/vehicleform" component={VehicleForm} />
            <Route exact path="/Serviceform" component={ServiceForm} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;

// import React, { Component } from "react"

// const todoItems = [
//   {
//     id: 1,
//     title: "Nature walk in the park",
//     description: "Visit the park with my friends",
//     completed: true
//   },

//   {
//     id: 2,
//     title: "Visit",
//     description: "Got to my aunt's place",
//     completed: true
//   },

//   {
//     id: 3,
//     title: "Write",
//     description: "Do an article about anthropology",
//     completed: true
//   },
// ];

// class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {todoItems};
//     };

//     render() {
//       return (
//         <main className="content">
//         <div className="row">
//           <div className="col-md-6 col-sm-10 mx-auto p-0">
//             <div className="card p-3">
//               <ul className="list-group list-group-flush">
//               {this.state.todoItems.map(item => (
//               <div>
//                 <h1>{item.title}</h1>
//                 <span>{item.description}</span>
//               </div>
//               ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//       )
//     }
//   }
  
// export default App;