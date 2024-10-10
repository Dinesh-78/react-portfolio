import React, { useEffect, useState } from 'react'
import './About.css';
import CircleProgressBar from './CircleProgressBar';

// const Counter = (perc,time) =>{
//   const [count1,setcount1]=useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setcount1( prevCounter => {
//             if (prevCounter < perc) { 
//                 return prevCounter + 1;
//             } else {
//                 clearInterval(interval);
//                 return prevCounter;
//             }
//         });
//     }, time); 

//     return () => clearInterval(interval); 
// }, [perc,time]);

// return count1;

// }


const About = () => {
  //  const htmlcount=Counter(65,30);
   
  return (
    <div className='about'>
      
      <h1> Skills Speaks About Me</h1>
      <div className='bar'>
      <CircleProgressBar percentage={90} circlewidth={200} skill={'HTML'} color={'orange'} />
      <CircleProgressBar percentage={85} circlewidth={200} skill={'CSS'} color={'pink'} />
      <CircleProgressBar percentage={90} circlewidth={200} skill={'JavaScript'} color={'yellow'} />
      <CircleProgressBar percentage={80} circlewidth={200} skill={'React js'} color={'blue'} />
      <CircleProgressBar percentage={75} circlewidth={200} skill={'Express js'} color={'blue'} />
      </div>

      <div className='bar'>
      <CircleProgressBar percentage={60} circlewidth={200} skill={'Spring Boot'} color={'green'} />
      <CircleProgressBar percentage={80} circlewidth={200} skill={'React Native'} color={'green'} />
      <CircleProgressBar percentage={80} circlewidth={200} skill={'Python'} color={'yellow'} />
      <CircleProgressBar percentage={70} circlewidth={200} skill={'Mysql'} color={'blue'} />
      <CircleProgressBar percentage={90} circlewidth={200} skill={'AWS'} color={'orange'} />
      </div>
      {/* <div className='bars'>
        <div className='spin-bar'>
       <div className="skill1">
          
              <div id="numb"> HTML  <br />{htmlcount}%</div>
            
       </div>
       <svg  width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle className='cir' cx="80" cy="80" r="70" strokeLinecap="round" />
    </svg>
    </div>

 <div className="skill2">
          
              <div id="numb"> HTML  <br />{htmlcount}%</div>
            
       </div>
       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" strokeLinecap="round" />
 </svg>

 <div className="skill1">
          
              <div id="numb"> HTML  <br />{htmlcount}%</div>
            
       </div>
       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" strokeLinecap="round" />
 </svg>

 <div className="skill1">
          
              <div id="numb"> HTML  <br />{htmlcount}%</div>
            
       </div>
       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" strokeLinecap="round" />
 </svg>
 </div> */}

    </div>
  )
}

export default About