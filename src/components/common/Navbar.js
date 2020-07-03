import React, { Fragment, useContext } from 'react'
import { AuthContext } from '../../App'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const Auth = useContext(AuthContext)
  return (
    <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/menu">Menu</NavLink></li>
      <li><NavLink to="/counter">Counter</NavLink></li>
      {Auth.isLoggedIn
        ? <Fragment>
          <li><NavLink to="/edit">Edit</NavLink></li>
          <span>Welcome {Auth.userName ? Auth.userName : ''}</span>
        </Fragment>
        : <Fragment>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </Fragment>
      }
    </ul>
  )
}

export default Navbar