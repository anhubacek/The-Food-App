import React from 'react'
import {Link} from 'react-router-dom'
import './Landing.css'


export default function Landing () {
    return (
        <div className='conteiner'>
            <div className='landing'>
                <div className='main'>
                <h1>The Food App</h1>
                <h3>Find recipes and create your own!</h3>
                <div>
                <Link to='/home'><h4>Start!</h4></Link>
                </div>
                </div>
            </div>
        </div>
    )
}
