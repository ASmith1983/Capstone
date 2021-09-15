import axios from 'axios'
import React, { useState, useEffect } from 'react'
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
       
        
        <h1>This is the ShowVehicles page/Component </h1>
        {
            
            allVehicles.map((AllVehicle, index) => (
                <div>
                    <p> { AllVehicle.make } </p>
                    <p> { AllVehicle.id } </p>
                    <p> { AllVehicle.model } </p>
                    {/* <img
                        src = {`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`

                        scr= {`http://www.regcheck.org.uk/image.aspx/@Zm9yZCBmaWVzdGE=${AllVehicle.make}+${AllVehicle.model}`}
                        alt= "vehicle-img"
                    /> */}
                </div>
            )
            )
        }
    </div>
);
};

export default ShowVehicles


