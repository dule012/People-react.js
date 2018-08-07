import React from 'react'
import neutralSmile from './neutral-smile.png'

const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={neutralSmile} alt='neutral-smile' />
            <p> We couldn't find any people matching your search</p>
        </div>
    )
}

export default NotFound