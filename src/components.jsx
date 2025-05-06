import React from 'react'
import { Link } from 'react-router-dom'
import Button from './button'
import Border from './Border'

function Components({heading,paragraph,boldText,image,buttonText}) {
  return (
    <div>
        <div className="notes-container">
      <div className="notes-texts">
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      <b>{boldText}</b>
<div  className='buttons'>
<Link  to="Home"> 
<Button  className='button' buttonText={buttonText}  />
</Link>  
      </div>
      </div>
      
    
      <div className="notes-animation">
      {image}
      </div>

      
    </div>
    <div>
    <Border/>

    </div>
    </div>
  )
}

export default Components
