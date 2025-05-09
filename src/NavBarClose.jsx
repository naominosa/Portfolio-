import React from 'react'
import minus from './assets/minus.png'
import remove from './assets/remove.png'
import twitter from './assets/twitter.png'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import instagram from './assets/instagram.png'
import mail from './assets/mail.png'
import hireme from './assets/hire.png'
import logo from './assets/logo.svg'
import { Link } from 'react-router-dom'
import './navClose.css'
function NavbarClose() {
return (
  <div className='text-animation'>
<div  className='Another'>
   <div className='UpperOverlay' >
    <div className="nav-container">
    <div className="logo-container">
      <img className='logo' src={logo}  style={{height:'70px'}} alt='logo'/>
      <img className='minus' src={minus} alt="minus" />
      <Link className='btn' to="/FirstScreen"> 
              <h3> Close</h3>
     </Link>

      </div>
      <div className='right-side'>
        <span className='rightheader-image'><img src={hireme} style={{ height: '60px' }} /> </span>
        </div>
    </div>
      
      
      <div className='header-content' >
          <div className="header-icons">

          <Link className='btn' to="/FirstScreen"> 
          <span ><img  src={remove} alt="" /></span>
     </Link>
     <a href="https://x.com/naominosa" target="_blank"><span><img className='icons' src={twitter} alt="" /></span></a>
     <a href="https://github.com/naominosa" target="_blank"><span><img className='icons' src={github} alt="" /></span></a>
     <a href=" https://www.instagram.com/naominosa/"target="_blank"><span><img className='icons' src={instagram} alt="" /></span></a>
     <a href="mailto:naominosa296@gmail.com?subject=Hello&body=I wanted to reach out to you about..."><span><img className='icons' src={mail} alt="" /></span></a>
     <a href="https://www.linkedin.com/in/naomi-nosa/"target="_blank"><span><img className='icons' src={linkedin} alt="" /></span></a>

          </div>
          </div>

          <div className='grouplinks'>
          <div className='headerlinks'>
               <li><Link className='links' to="/FirstScreen"> Home  </Link>  <li> My approach to development</li></li>
               <li><Link className='links' to="/WorkScreen"> Work  </Link>  <li> A little about my background</li></li>
               <li><Link className='links' to="/AboutMeScreen"> About </Link> <li>A little about me and my background.</li> </li>
             </div>
         
          </div>

         
        

     

    
   </div>
  </div>
  </div>
  
  )
}

export default NavbarClose