import React from 'react'
import Navbar from './Navbar'
import AnimatedImage from './animated'
import Text from './Text'
import Scroll from './assets/scroll.gif'
import Second from './Second'
function Firstscreen() {
  return (
    <div>
 <div className='Another'>
<div className='UpperOverlay'>
  <div className="layed">
  <div className='nav'>
    <Navbar/>

    </div>
 <div className='overlay'>
    

  <div className='texts'>
<Text/>
  </div>
<div className='image'>
<AnimatedImage/>
</div>
    </div>
    <div className='scroll-animation'>
      <img id='scroll' src={Scroll} alt="scroll" />
</div>

<div>
  <Second/>
</div>

  </div>


    </div>
    
    </div>
    
    </div>
  )
}

export default Firstscreen
