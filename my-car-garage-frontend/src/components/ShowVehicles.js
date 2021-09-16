import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ShowUsers from './ShowUsers'
import { Card, CardLink } from 'react-bootstrap';
// import ShowUsers from './ShowUsers';
// const Allusers = (allUsers)
// console.log(Allusers)

const ShowVehicles = () => {

const [allVehicles, setAllVehicles] = useState([])

const getAllVehicles = async ()=> {
    const response = await axios.get('http://localhost:8000/api/vehicles/')
    console.log(response.data)
    setAllVehicles(response.data)
}

useEffect(() => {
    getAllVehicles();
},[])




return (
    <div>
       
        {/* <ShowUsers key={allUsers} allUsers={allUsers} /> */}
        <h1>Current vehicles in garage 
        <h2> Select a vehicle below to view history of services</h2> 
                <button 
                            type="button"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href='http://localhost:3000/vehicleform';
                        }}
                >Add a vehicle </button> 
        </h1>
        
        {
            
            allVehicles.map((AllVehicle, index) => (
                <button 
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href=`http://localhost:3000/user/vehicle/servives/${AllVehicle.id}/`;
                      }}
                    > 
                    <Card className="m-3 rounded d-block shadow-lg user-show-card">
                    {/* <Card.Img variant="top" src={""} alt="user-Image" /> */}
                    <Card.Body>
                        <Card.Title> id: {AllVehicle.id} </Card.Title>
                        <Card.Text> Make: { AllVehicle.make } </Card.Text>
                        <Card.Text> Model: { AllVehicle.model } </Card.Text>
                        <Card.Text> Year: { AllVehicle.year } </Card.Text>
                        <Card.Text> Color: { AllVehicle.color } </Card.Text>
                        <Card.Text> Odometer: { AllVehicle.odometer } </Card.Text>
                        <Card.Text> Vehicle id: { AllVehicle.id } </Card.Text>
                        <Card.Link href="`http://localhost:3000/user/vehicle/services/:id/`"> Services: { AllVehicle.services } </Card.Link>
                            {/* <Card.Text> Vehicles: { AllVehicle.vehicles } </Card.Text> */}
                            {/* <Link className="btn btn-primary mr-2" to={`/${vehicles/AllVehicle.id}`}>Vehicles</Link> */}
                    </Card.Body>    
                    </Card>
                    </button>



                // <div>
                //     <p> { AllVehicle.make } </p>
                //     <p> { AllVehicle.id } </p>
                //     <p> { AllVehicle.model } </p>
                //     {/* <img
                //         src = {`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`

                //         scr= {`http://www.regcheck.org.uk/image.aspx/@Zm9yZCBmaWVzdGE=${AllVehicle.make}+${AllVehicle.model}`}
                //         alt= "vehicle-img"
                //     /> */}
                // </div>
            )
            )
        }
    </div>
);
};

export default ShowVehicles


