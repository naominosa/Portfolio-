import React from 'react'

function Button({buttontext, onClick, className, type}) {
  return ( 
      <button type={type} onClick={onClick} className={className}>
        {buttontext}  
    </button>
  )
}

export default Button