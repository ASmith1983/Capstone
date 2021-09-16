import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowVehicleDetails = () => {

    const [allVehicleDetails, setAllVehicleDetails] = useState([])
    console.log(allVehicleDetails)

    const getAllVehicleDetails = async ()=> {
        const response = await axios.get('http://localhost:8000/api/vehicles/')
        setAllVehicleDetails(response.data)
        console.log(response.data)
        console.log(allVehicleDetails)
    }


  


    return (
        <div>
            
        </div>
    )
}


export default ShowVehicleDetails
