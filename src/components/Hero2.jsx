import React from "react";
import { Fade } from "react-reveal";

export default function Hero2() {
  return (
    <div className='
      bg-navbar
      p-[9%]
      flex
      justify-center
      
      iPad:max-w-[auto]
      lt:h-[70vh]  
      lt:justify-start 
      '>
      <Fade distance='2rem' bottom delay={1250}>
        <div className='
          bg-red-
          max-w-[300px]
          text-[1rem]
          lt:mt-[auto] 
          lt:mb-[auto] 
          '>
          <h1
            className='
             text-[white] 
              leading-9
              text-left
              font-bold 
              text-[1.8rem]

              lt:leading-[3.5rem]
              lt:text-[2.6rem] 
              lt:w-[45rem]
              lt:justify-self-start
              '>
            HOME BAKES MADE WITH LOVE,
             PASSION, 
             AND METICULOUS ATTENTION TO
            DETAIL.
          </h1>
        </div>
      </Fade>
    </div>
  );
}
