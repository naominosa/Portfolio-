import React from 'react'
import Dash from './assets/dashed-line.png'
import anime from './assets/Animation.gif'
import Button from './button'
import Components from './components'
import Notes from './assets/notes-unscreen.gif'
import Developer from './assets/Animation - 1746423316847 (1).gif'
import Navigate from './assets/brand-loyalty-concept-illustration.png'

function Second() {
  return (
  
    <div className='text-animation'>
<div className='second'>
      <h1>Let's work together <img className='anime' src={anime} alt="" /> </h1>
      <div>
      <img className='dash' src={Dash} alt="" />

      </div>
      <p>From crafting interactive experiences to developing scalable design systems, from single-page applications to bold, experimental interfaces — I collaborate with great teams to bring imaginative, high-impact web ideas to life. <b>The more daring, the more exciting.</b> </p>

      <div className='buttons'>

     <a href="mailto:naominosa296@gmail.com?subject=Hello&body=I wanted to reach out to you about...">
        <Button className='button' buttontext={"Let's talk"}/> </a>
        
      </div>
    </div>

    <div className='dots-container'>
      <div className="dots-texts">
      <h1>Learning in Public.
      </h1>
      <p>
      I'm currently building small experiments as I learn more about web development and front-end animation. As I grow, I plan to release open source snippets and tools that others can learn from stay tuned!
      </p>
      </div>
      <div className="dots-image">
      </div>
    </div>

  <div className='Notes'>
    <Components  
    heading={'📝 Minimal Notes' }
    paragraph={'While learning front-end development, I wanted to build something useful for myself — so I created a simple, clean notes app. I focused on smooth interactions, a minimal UI, and an easy user experience. It started as a small coding challenge, but I’ve learned so much about state management, UI structure, and performance along the way. '}
    boldText={'It’s still evolving, but it’s already become my go-to space for jotting down ideas.'}
    image={ <img src={Notes} alt="" />}
    link= 'https://my-notes-app-naomis-projects-10628417.vercel.app/'
    buttontext={"Omie's Notes App"}
    />
  </div>
   <div>
   <Components  
    heading={ ' 🎨 Exploring Front-End Motion & UX   ' }
    paragraph={"I'm fascinated by how motion and subtle interactions can make a website feel more intuitive and engaging. I'm currently learning tools like Framer Motion to better understand how animation can guide attention, improve user experience, and add personality to interfaces."}
    boldText={"As I build out this portfolio, I'm experimenting with viewport-based effects, mouse interactions, and scroll-triggered animations. My goal is to create smooth, responsive interfaces that react meaningfully to user input — making the web feel just a little more alive."}
    image={ <img src={Developer} alt="" />}
    link= 'mailto:naominosa296@gmail.com'
    buttontext={"Let's work"}
    />

   </div>
   <div>
   <Components  
    heading={ '🧭 Learning Client-Side Navigation' }
    paragraph={"I'm currently exploring how modern websites manage page transitions without full reloads, using tools like the History API and React Router. I’m learning how client-side navigation works in single-page applications (SPAs), and how to structure routes to keep things fast, seamless, and dynamic"}
    boldText={"Eventually, I’d like to create smoother transitions between pages and content — not just technically, but with attention to design and user flow. This is helping me understand the foundations of building modern, responsive web apps."}
    image={ <img src={Navigate} alt="" />}
    link= 'mailto:naominosa296@gmail.com'
    buttontext={"Let's work"}
    />

   </div>
   
     </div>
    
  )
}

export default Second
