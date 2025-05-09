import React from 'react'
import { Link } from 'react-router-dom'
import Button from './button'
import Border from './Border'

function Components({heading,paragraph,boldText,image,buttontext,paragraphs,link}) {
  return (
    <div>
        <div className="notes-container">
      <div className="notes-texts">
      <h1>{heading}</h1>
      <p>{paragraph }  </p>
      {/* <br /> */}
      <p>{paragraphs}  </p>

      <b>{boldText}</b>
<div  className='buttons'>
<Link  to={link}> 
<Button  className='button' buttontext={buttontext}  />
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
