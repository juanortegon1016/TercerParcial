import React from 'react'
import { Link,NavLink,Route,Routes } from 'react-router-dom'

export const NavComponent = () => {
  return (
    <div>
        <div className='Nav'>
            <Link className="Links" to="/login">Login</Link><br/>
            <Link className="Links" to="/">Home</Link><br/>
            <Link to="/About" className='Links'>About</Link><br/>
        </div>
    </div>
  )
}
