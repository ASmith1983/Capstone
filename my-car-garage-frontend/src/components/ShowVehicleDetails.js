import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ShowUsers from './ShowUsers';


const ShowVehicleDetails = () => {

    const [vehicleDetails, setVehicleDetails] = useState([])
    console.log(vehicleDetails)

    const {id} = useParams();
    console.log(id)
    
    
    const getOneVehicle = async ()=> {
        const response = await axios.get(`http://localhost:8000/api/vehicles/${id}/`)
        console.log(response.data)
        setVehicleDetails(response.data);
    }
    useEffect(() => {
        getOneVehicle();
    },[])

    return (

        <div className="vehicle-show-box">
            <h1>Current vehicles in garage 
                <h2> Select a vehicle below to view history of services or add a Vehicle below</h2> 
                <button 
                                className="user-button"
                                type="button"
                                onClick={(e) => {
                                e.preventDefault();
                                window.location.href='http://localhost:3000/vehicleform';
                            }}
                    >Add a vehicle </button> 
            </h1>
            <h1> Vehicle Detail </h1>
            {/* {
                vehicleDetails.map((vehicle) =>(
                    <button 
                        className="vehicle-button"
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href=`http://localhost:3000/user/vehicles/service/${vehicle.id}/`;
                        }}
                    > 
                    <Card className="m-3 rounded d-block shadow-lg user-show-card">
                            <Card.Body>
                                <Card.Title> {vehicle.user_id}'s vehicles </Card.Title>
                                <Card.Text> Make: { vehicle.make} </Card.Text>
                                <Card.Text> Model: { vehicle.model } </Card.Text>
                                <Card.Text> Year: { vehicle.year } </Card.Text>

                            {   vehicle.services.map( (serviceUrl, index ) => {
                                return (<li href={serviceUrl} className="serviceUrl"> service{index}:{serviceUrl} </li>)
                            })}
                            </Card.Body>    
                    </Card>
                </button>
                )
                )
                } */}



              {<div className="vehicle-show-content">
                  <Card className="m-3 rounded d-block shadow-lg user-show-card">
                    <Card.Body> 
                        <Card.Text>{vehicleDetails.id}</Card.Text>
                        <Card.Text>{vehicleDetails.user}</Card.Text>
                        <Card.Text>Make: {vehicleDetails.make}</Card.Text>
                        <Card.Text>Model: {vehicleDetails.model}</Card.Text>
                        <Card.Text>Year: {vehicleDetails.year}</Card.Text>
                        <Card.Text>Color: {vehicleDetails.color}</Card.Text>
                        <Card.Text>Odometer: {vehicleDetails.odometer}</Card.Text>
                        <Card.Link>Services:{vehicleDetails.services}</Card.Link>
                    </Card.Body>
                  </Card>
            </div> 
       
        } 
        
    </div>
    )    
}

export default ShowVehicleDetails
