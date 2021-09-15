import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';

const ShowUsers = () => {

    const [allUsers, setAllUsers] = useState([])

    const getAllUsers = async ()=> {
        const response = await axios.get('http://localhost:8000/api/users/')
        console.log(response.data)
        setAllUsers(response.data)
    }

    useEffect(() => {
        getAllUsers();
    },[])

    

    return (
      
        <div className="user-show-box">
            {/* <ShowVehicles allUsers={allUsers}/> */}
            <h1>Welcome to My Car garage
                <h2> Select a user to view their garage or add a new user below</h2> 
                <button 
                            type="button"
                            onClick={(e) => {
                            e.preventDefault();
                            window.location.href='http://localhost:3000/userform';
                        }}
                >Add user profile</button>  
            </h1>
            {
                allUsers.map((AllUser, index) => (
                    
                    <button 
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href=`http://localhost:3000/api/vehicles/${AllUser.id}/`;
                      }}
                    > 
                    <Card className="m-3 rounded d-block shadow-lg user-show-card">
                    {/* <Card.Img variant="top" src={""} alt="user-Image" /> */}
                    <Card.Body>
                        <Card.Title> {AllUser.name}'s Garage </Card.Title>
                        <Card.Text> Id: { AllUser.id } </Card.Text>
                        <Card.Text> Name: { AllUser.name } </Card.Text>
                        <Card.Text> Location: { AllUser.location } </Card.Text>
                        <Card.Link href="`http://localhost:8000/api/vehicles/:id/`"> Vehicles: { AllUser.vehicles } </Card.Link>

                            {/* <Card.Text> Vehicles: { AllUser.vehicles } </Card.Text> */}
                            {/* <Link className="btn btn-primary mr-2" to={`/${vehicles/AllUser.id}`}>Vehicles</Link> */}
                    </Card.Body>    
                    </Card>
                    </button>
                )
                )
            }
        </div>
    );
};

export default ShowUsers
