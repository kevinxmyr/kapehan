import React from 'react';
import { Fade } from 'react-awesome-reveal';
import pic3 from '../assets/recipes-pic1.jpg';

export default function Recipes() {
	return (
		<div className='bg-white text-black flex flex-col gap-10 p-12
		ipadpro:flex-row '>
		
		<div className='max-w-[30rem] flex flex-col justify-center gap-16 m-[0_auto]
		ipadpro:flex'>
		  {/* FIRST ITEM */}
			<div className='ring-'>
				<Fade cascade>
					<h1 className='font-bold text-[1.6rem] pb-4'>Recipes</h1>
					<p className='font-rufina leading-8'>
						Sourdough can be intimidating for a novice baker, but it doesnt have
						to be. Every month, we combine some of our favorite sourdough
						recipes together.
					</p>
				</Fade>
			</div>

			{/* SECOND ITEM */}

			<div className='ring-'>
				<Fade cascade>
					<h1 className='font-bold text-[1.6rem] pb-4 '>Hand Crafted</h1>
					<p className='font-rufina leading-8'>
						Want to learn more about bakin and the secrets of bread making? Join
						our quarterly Hand Crafted courses in our store.
					</p>
				</Fade>
			</div>

			{/* THIRD ITEM */}

			<div className='ring-'>
				<Fade cascade>
					<h1 className='font-bold text-[1.6rem] pb-4'>Community</h1>
					<p className='font-rufina leading-8'>
						Looking for a venue to host an event? FLUFF KOPPI welcomes creative
						souls from all walks of life.
					</p>
				</Fade>
			</div>

		</div>
			
			{/* ITEM 4 PICTURE */}
			<div className='m-[0_auto]
			ipadpro:h-[auto] ipadpro:w-[auto]'>
				<img
					className='w-[30rem] h-[100%]
					ipadpro:w-[15rem]'
					src={pic3}
					alt='holding coffee'
				/>
			</div>
		</div>
	);
}
