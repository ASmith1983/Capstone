import axios from 'axios'
import React, { useState, useEffect } from 'react'

const ShowServices = () => {

    const [allServices, setAllServices] = useState([])

    const getAllServices = async ()=> {
        const response = await axios.get('http://localhost:8000/api/notes/')
        console.log(response.data)
        setAllServices(response.data)
    }

    useEffect(() => {
        getAllServices();
    },[])

    return (
        <div>
            <h1>This is the ShowServices page/Component </h1>
            {
                allServices.map((AllService, index) => (
                    <div>
                        <p> Vehicle: { AllService.vehicle} </p>
                        <p> Service: { AllService.service } </p>
                        <p> Notes: { AllService.notes } </p>
                        <p> Odometer: { AllService.current_odometer } </p>
                       
                    </div>
                )
                )
            }
        </div>
    );
};

export default ShowServices
