import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



const ShowVehicleDetails = () => {

    const [vehicleDetails, setVehicleDetails] = useState([])
    console.log(vehicleDetails)

    const {id} = useParams();
    console.log(id)
    const URL = `http://localhost:8000/api/users/${id}/`
    console.log(URL);
    
    
    const getOneVehicle = async (id) => {
        const response = await axios.get(URL)
        console.log(response.data)
        setVehicleDetails(response.data);
    }
    useEffect(() => {
        getOneVehicle();
    },[])

    const deleteItem = async (id) => {
       await axios.delete(URL);
      };
      return (

            <div className="vehicle-show-box">
                <h1>Current vehicles in garage </h1>
                <h2> Select a vehicle below to view history of services or add a Vehicle below</h2> 
                
                <h1> {vehicleDetails.name}'s Garage </h1>
        
                   {   vehicleDetails.vehicles ? vehicleDetails.vehicles.map((vehicle, index) => {
                  
                       <button 
                           className="vehicle-button"
                           type="button"
                           onClick={(e) => {
                           e.preventDefault();
                           window.location.href=`http://localhost:3000/user/vehicles/service/${vehicle.user_id}/`;
                           }}
                       > </button>
                                return (
                                    <Card className="m-3 rounded d-block shadow-lg user-show-card">
                                            <Card.Body>
                                                <Card.Title> {vehicleDetails.name}'s vehicles </Card.Title>
                                                <Card.Text> Make: { vehicle.make} </Card.Text>
                                                <Card.Text> Model: { vehicle.model } </Card.Text>
                                                <Card.Text> Year: { vehicle.year } </Card.Text>
        
                
                                                {  vehicle.services ? vehicle.services.map( (service, id ) => {
                                                    console.log(service);
                                                    let testLink = `http://localhost:3000/user/vehicles/service/${service.id}/`
                                                    return (<Card.Link  href={testLink} className="serviceUrl"> service #{id + 1}: {service.service} </Card.Link>)
                                                                        // href=`http://localhost:3000/user/vehicles/service/${service.id}/`
                                                }):<h1> No services yet </h1>
                                            }
                                        
                                            </Card.Body>    
                                    </Card>
                                 
                                 
                                 )
                                }): <h1> No vechicles in Garage </h1>
                    
                    } 
                    <button 
                                    className="user-button"
                                    type="button"
                                    onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='http://localhost:3000/vehicleform/';
                                }}
                    >Add a vehicle </button> 
        
                    <button
                            className="user-button"
                            onClick={() => deleteItem()}
                    >Delete User Profile</button>
            
        </div>
        )    
        }
      


export default ShowVehicleDetails


