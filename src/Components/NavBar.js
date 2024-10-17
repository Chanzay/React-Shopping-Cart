import React from 'react'
import Logomeandviv from '../Pictures/Logomeandviv.png'
import { Link } from 'react-router-dom'

function NavBar() {
  
  return (
    <div className='navBar'>

        <div className='logopos'>
        <Link to='/'><img src={Logomeandviv} alt="logo" className='logo'/></Link>
            <div>Asian Traditions</div>
        </div>

        <div className='navBarLink'>
        <Link to='/'><button className='navLinks'>Home</button></Link>
        <Link to='/cart'><button className='navLinks'>Cart</button></Link>
        </div>

    </div>
  )
}

export default NavBar
