import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className='container-fluid'>
            <div className='row'>
                <p className='col-6'> Persons</p>
                <Link to='/about' style={{textDecoration:'none'}}><span  className='col-2 i1'>About</span></Link>
                <i onClick={props.refresh} className="fa col-2 i2" title='Refresh'>&#xf0e2;</i>
                {props.view === true ? <i onClick={props.changing} className="fa col-2 i3">&#xf00a;</i> : <i onClick={props.changing} className="fa col-2 i4">&#xf00b;</i>}
            </div>
        </header>
    )
}

export default Header