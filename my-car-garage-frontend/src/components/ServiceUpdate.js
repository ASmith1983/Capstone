import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';

const ServiceUpdate = () => {
    
    let serviceHistory = useHistory();
    const { id } = useParams();


    const [vehicle, setVehicle] = useState("")
    const [vehicle_id, setVehicle_id] = useState("")
    const [service, setService] = useState("")
    const [notes, setNotes] = useState([])
    const [current_odometer, setCurrent_odometer] = useState(null)
    const [completed, setCompleted] = useState("flase")

    useEffect(() => {

    })




    const UpdateServiceInfo = async () => {
        let formField = new FormData()
        formField.append('vehicle',vehicle)
        formField.append('vehicle_id', vehicle_id)
        formField.append('service', service)
        formField.append('notes', notes)
        formField.append('current_odometer', current_odometer)
        formField.append('completed', completed)
                

       await axios({
            method: 'put',
            url:`http://localhost:8000/api/notes/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            
            serviceHistory.push('/')
        })
       
    }

    return (
        <div>
            <h1> Update a service </h1>
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
                                placeholder="Enter vehicle_id for service"
                                name="vehicle_id"
                                value={vehicle_id}
                                onChange={(e) => setVehicle_id(e.target.value)}
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
                        <button  onClick={UpdateServiceInfo}> Add Service   </button>
                </div>
            </div>
        </div>
    )
}

export default ServiceUpdate
