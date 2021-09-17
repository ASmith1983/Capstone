import React from 'react'

const Home = () => {
    return (
        <div>
            <p>This is home page.Please create a user profile or select from option above.</p>
            <h1>Welcome to My Car garage
                <h2> Please create a user profile or select from option above 
                     to view a your garage or add a new user below</h2> 
                    <button     
                        className="user-button"
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href='http://localhost:3000/userform';
                        }}ton
                    >Add user profile</button>  
            </h1>
        </div>

    )
}

export default Home
