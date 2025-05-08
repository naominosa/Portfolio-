import React from 'react'
import './WorkScreenText.css'
function WorkScreenText({head,ParagraphText,ParagraphTextTwo,src,id,boldText}) {
  return (
    <div id={id} className='overall' >
      <div className="text-component">
      <h1 className='head'>{head}</h1>
      <p>{ParagraphText}</p>

<p>{ParagraphTextTwo}</p>
<p>
<b>{boldText}</b>
</p>

     </div>
     <div className='stripes'>
        <img className="image" src={src} alt="" />
     </div>
    </div>
  )
}

export default WorkScreenText
