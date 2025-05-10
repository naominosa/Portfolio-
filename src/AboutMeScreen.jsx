import React from 'react'
import './workScreen.css'
import Navbar from './Navbar'
import dots from './assets/dot.png'
import Line from './assets/remove (2).png'
import Scroll from './assets/Animation - 1746717386937.gif'
import './AboutMeScreen.css'
import WorkScreenText from './workScreenText'
import random from './assets/random-Photoroom.png'
import Lang from './assets/lang-Photoroom.png'
import PicturesOfMe from './PicturesOfMe'
function AboutMeScreen() {
  return (
              <div className='container' >
       
       <div className='work-container'>
    <div className='bow' >

        <div className='flowing'>
        <div className="navv">
         <Navbar/>
       
         </div>
         <div className="first-text">
           <div className="h1-texts">
           <h1 className='heading'>About My Work
           </h1>
           <div className="dot">
           <img clasName="dots" src={dots} alt="dots-image" />
           </div>
           </div>
          <div className="p-text">
          <img  className='line' src={Line} alt="" />
          <div className="para">
          <p>
          I’m a female tech enthusiast who started my journey in 2022, after completing a First Class degree in Mass Communication from Igbinedion University. <b>After a brief break for my NYSC,</b>  I’ve been focused on developing my skills in frontend development, building intuitive web interfaces <b className='underlined'>with a passion for continuous learning and growth.</b> 
          </p>
          </div>
          </div>
   
   
         </div>
        
   
         <div className='Scroll' >
           <img src={Scroll} alt="" />
         </div>
   
         <div>
         <WorkScreenText
           src={random} 
           head='Little History'
           ParagraphText='I grew up in Lagos, Nigeria a place that sparked my curiosity and love for problem-solving early on. I’ve always been drawn to computers, and when a friend introduced me to tech in 2022, it felt like a natural path. Since then, I’ve been building my skills in frontend development, with a particular focus on HTML, CSS, and React.'
           ParagraphTextTwo='I hold a First Class degree in Mass Communication from Igbinedion University, and while my background is rooted in media, I’ve discovered a powerful connection between storytelling and design  especially in how intuitive interfaces communicate with users. Though I haven’t had any formal internships yet, I’ve worked on several mini projects that have helped me grow as a developer.'
           boldText='Beyond code, I enjoy writing, cooking, and learning new things. I’m currently seeking opportunities to expand my experience, collaborate with others, and create meaningful digital experiences.
   
   '
           />
         </div>
        
         <div>
         <WorkScreenText
         id='flip'
           src={Lang} 
           head='Lover of languages.'
           ParagraphText='When I’m not immersed in code, I’m diving into the intricate patterns of human speech. Language fascinates me not just the words themselves, but the cognitive processes behind how we learn and use them. I’m always picking up bits of new tongues; if I can’t say “hello” in a language yet, it’s only a matter of time.'
           ParagraphTextTwo='Recently, my interest has shifted toward how technology and linguistics intersect. Rather than seeing Natural Language Processing used mainly for algorithms that sell us things, I’m exploring its potential to support language learners like myself. French is my latest challenge let’s see where it takes me.'
           />
         </div>

         <div>
         <h2 className='custom' style={{ textAlign: 'center' }}>Here Are Some Picture Of me Having Fun!</h2>
          <PicturesOfMe/>
         </div>
        </div>
    </div>
       
       </div> 
   
         </div>
       

  )
}

export default AboutMeScreen
