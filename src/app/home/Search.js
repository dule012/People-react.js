import React from 'react'

const Search = (props) => {
    return (
        <div className='search'>
            <i style={{
                fontSize: '30px',
                color: 'black'
            }} className="fa">&#xf002;</i>
            <input onChange={props.search} value={props.value} type='text' name='search' placeholder='Search Persons...' />
        </div>
    )
}

export default Search