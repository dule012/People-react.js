import React from 'react'

const PersonGrid = (props) => {
    return (
        <div className={`col-sm-12 col-md-6 col-lg-4 col-xl-3 cardGrid ${props.gender === 'female' ? 'gender': ''}`}>
            <img src={props.large} alt={props.first} />
            <p className='cardGridName'>{props.first}</p>
            <p className='cardGridInfo'><i style={{ fontSize: '14px' }} className="fa">&#xf0e0;</i>{props.email.slice(0, 3) + '...' + props.email.slice(props.email.indexOf('@') - 3, props.email.length)}</p>
            <p className='cardGridInfo'><i style={{ fontSize: '14px' }} className="fa">&#xf1fd;</i>{`${new Date(props.birth).getDate()}.${new Date(props.birth).getMonth() + 1}.${new Date(props.birth).getFullYear()}`}</p>
        </div>
    )
}
export default PersonGrid