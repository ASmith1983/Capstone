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
            </h1>
            { allUsers ? allUsers.map((user, index) => (
                    
                    <button 
                        className="user-button"
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href=`http://localhost:3000/user/vehicles/${user.id}/`;
                      }}
                    > 
                    <Card className="m-3 rounded d-block shadow-lg user-show-card">
                    {/* <Card.Img variant="top" src={""} alt="user-Image" /> */}
                    <Card.Body>
                        <Card.Title> {user.name}'s Garage </Card.Title>
                        <Card.Text> Id: { user.id } </Card.Text>
                        <Card.Text> Name: { user.name } </Card.Text>
                        <Card.Text> Location: { user.location } </Card.Text>

                    {  user.vehicles ? user.vehicles.map( (vehicleUrl, index) => {
                        console.log(vehicleUrl)
                        
                        return (<li href={vehicleUrl.user_id}> {vehicleUrl.make}</li>)
                        // return (<p> test </p>)
                    }):  <h1> No user found in Garage </h1>}
                    </Card.Body>    
                    </Card>
                    </button>
                )
                ): <h1> No user found in Garage </h1>
            }
            
                    <button     
                        className="user-button"
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href='http://localhost:3000/userform';
                        }}ton
                    >Add User profile</button>  
           
        </div>
    );
};

export default ShowUsers
