import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div className="container">
            <h1 style={{color: 'red'}} >Error: Page Not Found</h1>

            <Link to="/" ><h2>Back Home</h2></Link>
        </div>
    )
}

export default Error
