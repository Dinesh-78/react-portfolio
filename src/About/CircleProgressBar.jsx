import React from 'react'
import './About.css';
import { useState,useEffect } from 'react';
const Counter = (perc,time) =>{
  const [count1,setcount1]=useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setcount1( prevCounter => {
            if (prevCounter < perc) { 
                return prevCounter + 1;
            } else {
                clearInterval(interval);
                return prevCounter;
            }
        });
    }, time); 

    return () => clearInterval(interval); 
}, [perc,time]);

return count1;

}

const CircleProgressBar = ({percentage,circlewidth,skill,color}) => {
    const radius =85;
    const dashArray=radius*Math.PI*2;
    const dashoffset = dashArray-(dashArray * percentage)/100;
    const percentageani=Counter(percentage,25)
    console.log(color)
  return (
    <div>
        <svg 
        width={circlewidth} 
        height={circlewidth}
        viewBox={`0 0 ${circlewidth} ${circlewidth}`}>

        <circle 
        cx={circlewidth/2} 
        cy={circlewidth/2} 
        strokeWidth="15px"
        r={radius} 
        className="circle-background"
        />
      

<circle 
        cx={circlewidth/2} 
        cy={circlewidth/2} 
        strokeWidth="15px"
        r={radius} 
        className="progress"
        style={{
          stroke:`${color}`,
          strokeDasharray:dashArray,
          strokeDashoffset:dashoffset,
          
        }}
        transform={`rotate(-90 ${circlewidth/2} ${circlewidth/2})`}

        />
        <text 
        x="50%"
        y="50%" 
        dy="0.3em" 
        textAnchor='middle' 
        className='cir-text'
        >  <tspan x="50%" dy="-0.3em">{skill}</tspan> 
          <tspan x="50%" dy="1.3em">{percentageani}%</tspan>
          </text>
         </svg>
    
    </div>
  )
}

export default CircleProgressBar