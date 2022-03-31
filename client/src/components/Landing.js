import React from 'react'
import {Link} from 'react-router-dom'


export default function Landing () {
    return (
        <div>
        <h1>The Food App</h1>
        <h3>Find recipes and create new ones!</h3>
        <Link to='/home'>Begin</Link>
        </div>
    )
}
