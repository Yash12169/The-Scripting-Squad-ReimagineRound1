import React, { useState, useEffect } from 'react';
import './Animation1.css'

function Animation1() {
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState("fixed");
   
  
   const str="This is Rohan Malakar From Mits Gwalior. I am a web developer.";
   const arr=str.split(" ");
   
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animation1");
      if (!element) return;
     
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const hieghtpercentage=Math.floor(((-1*rect.top)/(rect.height-windowHeight))*100);
       if ( hieghtpercentage>=100) {
         const main=document.getElementById("main");
         main.style.removeProperty('top');
         setPosition("absolute");
         main.style.bottom='1px';
       }else{
         setPosition("fixed");
         const main=document.getElementById("main");
         main.style.top="1vh";
       }
       if(hieghtpercentage<=0){
        setWidth("0");
       }
       else if (hieghtpercentage<=100) {
         setWidth(hieghtpercentage);
       }
       else{
         setWidth("100");
       }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
     <div id='animation1' >
        <div className='main' id='main' style={{ position : `${position}`}}>
        <div className='box' style={{width: `${width}%`}}>  
        </div>
        <p id='paragraph'>
           {
            arr.map((ele,index,arr)=>{
              const len=arr.length;
               const value=Math.floor(len*width/100);
               if (index<value) {
                 return <span key={index} >{ele}{" "}</span>
               }
               
            })
           }
        </p>
        </div>
     </div>
  )
}

export default Animation1;