// import { Link } from 'react'
import profilePic from './assets/profile-image.jpeg'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import github from './assets/github.png'
import './App.css'

function App() {
  return (
    <div className="container">

      <img className='profile-image' src={profilePic} alt='profile-image'/>
      <h3 className='owner-name'>Felix Omwenga</h3>

      <h4 className='title'>Software Engineer</h4>

      <h5 className='website' href='felixomwenga.info'>www.felixomwenga.info</h5>
      
      <div className='buttons'>
        <button className='emailButton'><i class="fa-sharp fa-solid fa-envelope"></i> Email</button>
        <button className='linkedinButton'><i class="fa-brands fa-linkedin-in"></i> LinkedIn</button> 
      </div>
      
      <div className='about'>
        <h3>About</h3>
        <h4>I am a software developer with a particular interest
           in making things simple and automating daily tasks.
            I try to keep up with security and best practices, 
            and am always looking for new things to learn.
          </h4>
      </div>

      <div className='interests'>
        <h3>Interests</h3>
        <h4>Food expert. Music scholar. Reader. Internet fanatic. 
          Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. 
          Coffee fanatic.
        </h4>
      </div>

      <footer className='footer'>
        <img src={twitter} alt="twitter"/>
        {/* <i class="fa-brands fa-square-twitter"></i> */}
        <img src={facebook} alt="facebook" /> 
        <img src={instagram} alt="instagram" />
        <img src={github} alt="github" />
      </footer>
    </div>
  )
}

export default App
