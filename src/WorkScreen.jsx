import React from 'react'
import Navbar from './Navbar'
import './workScreen.css'
import dots from './assets/dot.png'
import Line from './assets/remove (2).png'
import WorkScreenText from './workScreenText'
import Girl from './assets/processed-image (1).png'
import Work from './assets/girlWork.png'
import Components from './components'

function WorkScreen() {
  return (
    <div className='container' >
    <div className='work-container'>
     <div className='flowing'>
     <div className="navv">
      <Navbar/>

      </div>
      <div className="first-text">
        <div className="h1-texts">
        <h1 className='heading'>About My Work
        </h1>
        <div className="dot">
        <img className="dots" src={dots} alt="dots-image" />

        </div>
        </div>
       <div className="p-text">
       <img  className='line' src={Line} alt="" />
       <div className="para">
       <p>I'm a <b>front-end developer in training</b> , currently building my skills as I work toward becoming a full-stack developer. So far, <b>I've built a functional notes app</b> and am now focused on designing and developing my <b>personal portfolio.</b>  I'm passionate about creating clean, interactive user experiences and eager to take on new challenges as I continue learning and <b className='underlined'>growing in web development.</b> 
       </p>
       </div>
       </div>
        
      </div>
      <div>
        <WorkScreenText
        head='Purposeful Development'
        ParagraphText='Every project is a chance to learn and grow, and I approach each one with a focus on clean, accessible, and optimized code. As a beginner in web development, I’m building a strong foundation by taking on projects that challenge me to think critically and solve problems effectively.'
        ParagraphTextTwo='While I may be early in my career, I’m passionate about creating meaningful user experiences  from simple web pages to interactive interfaces. I’m always exploring the best tools and technologies for the task, and I believe in using the right solution, not just the newest one.'
        src={Girl}
        />

      </div>

      <div className='flip'>
        <WorkScreenText
        id='flip'
        src={Work} 
        head='Fluid Interfaces'
        ParagraphText='I care deeply about the small details that make a design feel alive. Whether it’s a subtle hover effect or a more complex interaction, I believe animation should do more than just look good  it should help users understand and move through an interface naturally.'
        ParagraphTextTwo='I’m learning to blend timing, motion, and performance in a way that adds personality while keeping things smooth and intuitive. My focus is always on creating interactions that feel thoughtful, grounded, and a joy to use.'
        />
        
      </div>
      <div className='love'>
        <Components
        heading='Let’s Build Better'
        paragraph='I believe that what we create as developers matters  not just how it works or looks, but the impact it has on people and the planet. I aim to approach every project with a sense of responsibility, and I try to make ethical choices about the work I take on.    ' 
        paragraphs='If your project involves things like online gambling, payday lending, tobacco, or business models that exploit personal data, I’m not the right fit. I also steer clear of crypto-based projects for now  mainly because of the environmental cost. I’m not against emerging tech, but until it becomes genuinely sustainable (beyond just offsets), it’s not something I feel comfortable contributing to.'
        boldText='On the flip side, if you’re working on something that supports sustainability, inclusion, or creates positive change I’d love to be part of it.'
    link= 'mailto:naominosa296@gmail.com'
      
        buttontext='Say Hi!'
        />
      </div>
     </div>
    
    </div> 

      </div>
  
  )
}

export default WorkScreen
