import React from 'react';
import './Hero.css';
import pro from '../assets/hero.png'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={pro} alt=""   />
        <span className='content'>
        <h1 className='title'>FULL STACK DEVELOPER</h1>
        <p className='intro'>I am Veerapareddy Dinesh Having good knowledge in Frontend Development <br /> and also Providing freelancing Services </p>
        <a target='_' href="https://drive.google.com/file/d/1wasIrrVhr0B0lLkh5os9o2ogU4aVmdtO/view?usp=sharing"> <div className='hero-research'> RESUME  </div></a>
        <a target='_' href="https://github.com/Dinesh-78"><div className="hero-resume"> GITHUB </div> </a>
        </span>
    </div>
  )
}

export default Hero