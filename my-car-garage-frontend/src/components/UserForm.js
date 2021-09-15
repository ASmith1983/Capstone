
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const UserForm = () => {
    // const[image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [vehicles, setVehicles] = useState(null)

    const history = useHistory();

    const AddUserInfo = () => {
        let formField = new FormData()

        formField.append('name', name)
        formField.append('location', location)
        formField.append('vehicles', vehicles)

       axios({
            method: 'post',
            url:'http://localhost:8000/api/users/',
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push('/')
        })
       
    }

    return (
        <div>
            <h1> Creat User Profile </h1>
            <div className="container">
                <div className="form-group">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter User name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                             <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter User location"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter User vehicles"
                                name="vehicles"
                                value={vehicles}
                                onChange={(e) => setVehicles(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-user-upload" onClick={AddUserInfo}> Add User   </button>
                </div>
            </div>
        </div>
    )
}

export default UserForm
