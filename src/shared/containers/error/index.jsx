import React from 'react'
import {Link} from 'react-router-dom'

const NoMatch = ({about, customer_services}) => {
    return (
        <div className="error">
            <h1>Page not found</h1>
            <p><Link to='/'><img src='images/error.jpg' alt='Error' height='400px'/></Link></p>
            <p><Link to='/'>Start shopping</Link></p>
        </div>
    )
}

export default NoMatch
