import React from 'react'

const PersonList = (props) => {
    return (
        <div className={props.gender === 'female' ? 'row cardList gender' : 'row cardList'}>
            <div className='col-4 col-sm-2 col-md-2 col-lg-2'>
                <img src={props.image} alt={`${props.image}`} />
            </div>
            <div className='col-8 col-sm-10 col-md-10 col-lg-10'>
                <p className='name'>{`${props.first}  ${props.last}`}</p>
                <p><i style={{ fontSize: '14px' }} className="fa">&#xf0e0;</i>{`${props.email.slice(0, 3)}...${props.email.slice(props.email.indexOf('@') - 3, props.email.length)}`}</p>
                <p><i style={{ fontSize: '14px' }} className="fa">&#xf1fd;</i>{`${new Date(props.birth).getDate()}.${new Date(props.birth).getMonth() + 1}.${new Date(props.birth).getFullYear()}`}</p>
            </div>
        </div>
    )
}

export default PersonList

