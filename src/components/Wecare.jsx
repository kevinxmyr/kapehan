import React from "react";
import { Fade } from "react-reveal";
import picture from "../assets/hand-crafted-section3.jpeg";

export default function Wecare() {
  return (
    <div
      className='
    bg-beige
    max-w-[auto]
    flex
    justify-center
    '>
      <div
        className='max-w-[1200px] 
        lt:flex 
        lt:justify-center
        '>
        <div
          className='
        text-[black] 
        flex
        flex-col-reverse
        px-5
        py-[2.7rem]

        lt:flex
        lt:flex-row
        lt:justify-center
      '>
          <Fade distance='3rem' delay={600} left>
            <div
              className='
          max-w-[320px] 
          self-center
          
          lt:justify-items-center
          lt:mr-[10rem]
          lt:max-w-[1200px]
          '>
              <img
                className='
              max-h-[35rem]
              self-center
              shadow-xl'
                src={picture}
                alt='coffee'
              />
            </div>
          </Fade>

          <Fade distance='3rem' delay={500} right>
            <div
              className=' 
              max-w-xs
              self-center
              iPad:self-center
              lt:self-center
              '>
              <h1
                className='
                font-bold 
                mb-8 
                text-[2rem]
                  '>
                We Care
              </h1>

              <div className='font-rufina iPad:justify-center'>
                <p className='pb-[2.7rem]'>
                  Our philosophy is to be part of the neighborhood and give back
                  to our community.
                  <br /> <br />
                  We publish monthly sourdough recipe booklets both online and
                  in-store, organize workshops and evening courses, and even
                  rent out our shop for local artists and musicians.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
