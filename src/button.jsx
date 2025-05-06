import React from 'react'

function Button({buttonText, onClick, className, type}) {
  return (
      <button  buttonText={buttonText} type={type} onClick={onClick} className={className}>
        {buttonText}  
    </button>
  )
}

export default Button