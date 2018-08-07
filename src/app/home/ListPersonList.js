import React from 'react'
import PersonList from './PersonList'

const ListPersonList = (props) => {
    return (
        <div className='container'>
            {
                props.arr.map((el, i) => {
                    return <PersonList first={el.firstName} last={el.lastName} image={el.medium} gender={el.gender} email={el.email} birth={el.birth} key={i} />
                })
            }
        </div>
    )
}

export default ListPersonList