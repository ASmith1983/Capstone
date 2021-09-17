import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const ServiceForm = () => {
    // const[image, setImage] = useState(null)
    const [vehicle, setVehicle] = useState("")
    const [service, setService] = useState("")
    const [notes, setNotes] = useState([])
    const [current_odometer, setCurrent_odometer] = useState(null)
    const [completed, setCompleted] = useState("flase")

    const serviceHistory = useHistory();

    const AddServiceInfo = () => {
        let formField = new FormData()

        formField.append('vehicle', vehicle)
        formField.append('service', service)
        formField.append('notes', notes)
        formField.append('current_odometer', current_odometer)
        formField.append('completed', completed)
                

       axios({
            method: 'post',
            url:'http://localhost:8000/api/notes/',
            data: formField
        }).then(response => {
            console.log(response.data);
            
            serviceHistory.push('../')
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
                                placeholder="Enter vehicle for service"
                                name="vehicle"
                                value={vehicle}
                                onChange={(e) => setVehicle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                             <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter service type"
                                name="service"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter service notes"
                                name="notes"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter vehicles current odometer"
                                name="current_odometer"
                                value={current_odometer}
                                onChange={(e) => setCurrent_odometer(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter if service is completed"
                                name="completed"
                                value={completed}
                                onChange={(e) => setCompleted(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-user-upload" onClick={AddServiceInfo}> Add Service   </button>
                </div>
            </div>
        </div>
    )
}

export default ServiceForm
