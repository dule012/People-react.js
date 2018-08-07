import React from 'react'
import PersonGrid from './PersonGrid'

const ListPersonGrid = (props) => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                {props.arr.map((el, i) => {
                    return <PersonGrid first={el.firstName} last={el.lastName} large={el.large} email={el.email} gender={el.gender} birth={el.birth} key={i} />
                })}
            </div>
        </div>
    )
}

export default ListPersonGrid