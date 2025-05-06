import React from 'react'
import './Navbar.css'
import logo from './assets/logo.svg'
import minus from './assets/minus.png'
import hireme from './assets/hire.png'
// import { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (

  <div className='fixed'>
 <div className='header'>
     <div className='navbar' >
        <div className="logo-container">
        <img className='logo' src={logo}  style={{height:'70px'}} alt='logo'/>
        <img className='minus' src={minus} alt="minus" />
        <div>
          <Link className='btn' to="/NavbarClose"> 
        <h3 className='text-animation' > MENU</h3>
            </Link>
        </div>
        </div>
        <div className='right-side'>
          <span className='rightheader-image'><img src={hireme} style={{ height: '60px' }} /> </span>
          </div>
      

     </div>

    </div>
  
    </div>
   
  )
}
export default Navbar