
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const VehicleForm = () => {
    // const[image, setImage] = useState(null)
    const [user, setUser] = useState("")
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")
    const [color, setColor] = useState("")
    const [odometer, setOdometer] = useState("")
    // const [services, setServices] = useState(null)


    const vehicleHistory = useHistory();

    const AddVehicleInfo = () => {
        let formField = new FormData()

        formField.append('user', user)
        formField.append('make', make)
        formField.append('model', model)
        formField.append('year', year)
        formField.append('color', color)
        formField.append('odometer', odometer)
        // formField.append('services', services)

       axios({
            method: 'post',
            url:'http://localhost:8000/api/vehicles/',
            data: formField
        }).then(response => {
            console.log(response.data);
            vehicleHistory.push('/vehicles')
        })
       
    }

    return (
        <div>
            <h1> Creat new Vehicle </h1>
            <div className="container">
                <div className="form-group">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Vehicle's user id"
                                name="user"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                             <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Vehicle's make"
                                name="make"
                                value={make}
                                onChange={(e) => setMake(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Vehicle's model"
                                name="model"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Vehicle's year"
                                name="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div> 
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Vehicle's color"
                                name="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div> 
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Vehicle's odometer"
                                name="odometer"
                                value={odometer}
                                onChange={(e) => setOdometer(e.target.value)}
                            />
                        </div> 
                        {/* <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Vehicle's services"
                                name="services"
                                value={services}
                                onChange={(e) => setServices(e.target.value)}
                            />
                        </div> */}
                        <button className="btn btn-Vehicle's-upload" onClick={AddVehicleInfo}> Add Vehicle   </button>
                </div>
            </div>
        </div>
    )
}

export default VehicleForm
