import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
  
)
  {/* <button className='header-text' onClick={handleDisplay}> MENU</button>
        <div className='header-content' style={{ display: isDisplayHeader ? 'block' : 'none' }}>
          <div className='Header-Icons'><span> <img src={X} style={{ height: '30px' }} /> </span>
            <span> <img src={Insta} style={{ height: '30px' }} /> </span>
            <span> <img src={Git} style={{ height: '30px' }} /> </span>
            <span> <img src={Email} style={{height: '30px'}} /> </span>
          </div>
          <div className='grouplinks'>
            <div className='headerlinks'>
              <Link className='t' to="Home"> Home</Link>
              <Link className='t' to="Work"> Work</Link>
              <Link className='t' to="About"> About</Link>
              <Link className='t' to="Writing"> Writing</Link>
            </div>
            <div className='grouplinks-contents'><span className='letter'> Back to home page</span>
              <span className='letter'> My approach to development</span>
              <span className='letter'> A little about my background</span>
              <span className='letter'> My latest writing on tech and language</span>
            </div>
          </div>
        </div>
     </div>
     <div className='right-side'>
        <span className='rightheader-image'><img src={RightHead} style={{ height: '40px' }} /> </span>
        <button  className='rightheader-text' > Hire me </button> */}