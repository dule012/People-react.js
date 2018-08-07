import React from 'react'

const PersonList = (props) => {
    return (
        <div className='row cardList'>
            <div className='col-sm-1 col-md-1 col-lg-1'>
                <img src={props.image} alt={`${props.image}`} />
            </div>
            <div className='col-sm-10 col-md-10 col-lg-10'>
                <p>{`${props.first}  ${props.last}`}</p>
                <p><i style={{ fontSize: '14px' }} className="fa">&#xf0e0;</i>{`${props.email.slice(0, 3)}...${props.email.slice(props.email.indexOf('@') - 3, props.email.length)}`}</p>
                <p><i style={{ fontSize: '14px' }} className="fa">&#xf1fd;</i>{`${new Date(props.birth).getDate()}.${new Date(props.birth).getMonth() + 1}.${new Date(props.birth).getFullYear()}`}</p>
            </div>
        </div>
    )
}

export default PersonList

