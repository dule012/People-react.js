import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className='container-fluid'>
            <p> Persons</p>
            <Link to='/about'><span>About</span></Link>
            <i onClick={props.refresh} style={{ fontSize: '24px' }} className="fa" title='Refresh'>&#xf0e2;</i>
            {props.view === true ? <i onClick={props.changing} style={{ fontSize: '24px' }} className="fa">&#xf00a;</i> : <i onClick={props.changing} style={{ fontSize: '24px' }} className="fa">&#xf00b;</i>}
        </header>
    )
}

export default Header