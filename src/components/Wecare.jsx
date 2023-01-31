import React from 'react';
import { Fade } from 'react-awesome-reveal';
import picture from '../assets/hand-crafted-section3.jpeg';


export default function Wecare() {
	return (
		<div className='bg-beige p-12 ipadpro:p-20'>
			{/* -------WE CARE------ */}
			{/* <Fade
				distance='3rem'
				delay={250}
				left> */}
			{/* wrapper */}
			<div
				className='flex flex-col gap-16  
			ipadpro:flex-row 
			ipadpro:m-[0_auto]
			ipadpro:max-w-[100rem]'>
				<div
					className='text-itim font-poppins max-w-[30rem] m-[0_auto] 
				ipadpro:order-last ipadpro:self-center ipadpro:max-w-[25rem]'>
					<h1
						className='uppercase font-poppins font-bold text-[1.8rem]
				mb-10'>
						we care
					</h1>
					<p className='font-rufina leading-8'>
						Our philosophy is to be part of the neighborhood and give back to
						our community. <br /> <br /> We publish monthly sourdough recipe
						booklets both online and in-store, organize workshops and evening
						courses, and even rent out our shop for local artists and musicians.
					</p>
				</div>
				{/* </Fade> */}

				{/* ---------image------- */}
				{/* <Fade distance='3rem'
				delay={500}
				left> */}
				<div className='max-w-[30rem] m-[0_auto]'>
					<img
						className='max-h-[35rem] self-center shadow-xl'
						src={picture}
						alt='coffee'
					/>
				</div>
				{/* </Fade> */}
			</div>
		</div>
	);
}

{
	/* <div
			className='bg-beige max-w-[auto] flex'>
			<div
				className='max-w-[1200px]       
        '>
				<div className=''>
					<Fade
						distance='3rem'
						delay={600}
						left>
						<div className='max-w-[320px]'>
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

					<Fade
						distance='3rem'
						delay={500}
						right>
						<div className='text-[#181e21]'>
							<h1
								className='
                font-bold 
                mb-8 
                text-[2rem]
                  '>
								We Care
							</h1>

							<div className='font-rufina'>
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
		</div> */
}
