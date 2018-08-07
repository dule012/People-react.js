import React from 'react'

const Search = (props) => {
    return (
        <div className='search'>
            <i style={{
                fontSize: '30px',
                color: 'black'
            }} className="fa">&#xf002;</i>
            <input onChange={props.search} value={props.value} type='text' name='search' placeholder='Search Persons...' />
            <p className='lastUpdate'>Last activity:{props.timeCounter < 60 ? `${props.timeCounter} minutes ago`: `${props.timeCounter % 60} hours ago`}</p>
        </div>
    )
}

export default Search