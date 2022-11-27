import React from "react";
import { Fade } from "react-reveal";
import pic2 from "../assets/recipes-pic.jpeg";
import pic3 from "../assets/recipes-pic1.jpg";

export default function Recipes() {
  return (
    <div
      className='
      bg-[#fefefe]
      text-black
      p-[3rem_5%]
      grid
      grid-cols-7
      justify-center
      mx-[auto]

      iPad:grid-cols-7
      iPad:pt-[3rem]
      iPad:pb-[3rem]

      lt:grid-cols-3
      lt:grid-rows-[139px_auto_86px_auto_80px_auto_115px]
      lt:h-[auto]
      lt:pt-0
      lt:pb-0


      '>
        {/* BLANK 1 */}
        <div className='col-start-1 row-start-1 '></div>

        {/* FIRST ITEM */}
        <Fade distance='2.5rem' left>
          <div className='bg-slate- col-start-3 row-start-2 w-[20rem] mb-[2rem]
          justify-center 
          max-w-[391px]
          iPad:col-start-3
          lt:col-start-1
          '>
            <h1 className='font-bold text-[1.6rem] pb-8'>Recipes</h1>
            <p className='font-rufina leading-8'>
              Sourdough can be intimidating for a novice baker, but it doesnt have
              to be. Every month, we combine some of our favorite sourdough
              recipes together.
            </p>
          </div>
        </Fade>

        {/* BLANK 2 */}
        <div className=' col-start-1 row-start-3'></div>

        {/* SECOND ITEM */}
        <Fade left distance='2.5rem' delay={250}>
          <div className='bg-slate- col-start-3 row-start-4 w-[20rem] mb-[2rem]
          iPad:col-start-3
          lt:col-start-1'>
            <h1 className='font-bold text-[1.6rem] pb-8 '>Hand Crafted</h1>
            <p className='font-rufina leading-8'>
              Want to learn more about bakin and the secrets of bread making? Join
              our quarterly Hand Crafted courses in our store.
            </p>
          </div>
        </Fade>

        {/* BLANK 3 */}
        <div className=' col-start-1 row-start-5'></div>

        {/* THIRD ITEM */}
        <Fade left distance='2.5rem' delay={700}>
          <div className='bg-slate- col-start-3 row-start-6 pb-[3rem] w-[20rem]
          iPad:col-start-3
          lt:col-start-1'>
            <h1 className='font-bold text-[1.6rem] pb-8'>Community</h1>
            <p className='font-rufina leading-8'>
              Looking for a venue to host an event? FLUFF KOPPI welcomes creative
              souls from all walks of life.
            </p>
          </div>
        </Fade>

        {/* BLANK 4 */}
        <div className='bg-slate- col-start-1 row-start-7 row-end-8'>
          <p></p>
        </div>

        {/* ITEM 4 PICTURE */}
        <div className='row-start-7 row-end-[8] col-start-3 col-span-3
        iPad:col-start-3
        lt:col-start-3
        lt:row-start-1
        '>
          <img className='w-[30rem] h-[100%]' src={pic3} alt='holding coffee' />
        </div>
    </div>
  );
}
// breaktime again ty sa panonood
