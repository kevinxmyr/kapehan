import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';
import pic1 from '../assets/gallery1.jpg';
import pic2 from '../assets/gallery2.jpg';
import pic3 from '../assets/gallery3.jpg';
import pic4 from '../assets/gallery4.jpg';
import pic5 from '../assets/gallery5.jpg';
import pic6 from '../assets/gallery6.jpg';

export default function Gallery() {
	const pics = [pic1, pic3, pic4, pic6, pic5, pic2];
	let cardDelay = 0;
	return (
		<div
			className='
    bg-beige
    p-[12%]
    flex justify-center items-center
    lt:p-[5%]
    lt:justify-center
    '>
			{/*------------------ GRID -------------- */}
			<div
				className='
        gap-[2rem] grid
        justify-items-center
        ipadpro:grid-cols-2
        ipadpro:justify-items-center
        lt:max-w-[1100px]
        lt:grid-cols-3
        '>
				{pics.map((image) => {
					const key = Math.random(image);
					cardDelay += 100;
					return (
						<Fade
							key={key}
							distance='1.2rem'
							delay={cardDelay}
							bottom>
							<div className='justify-self-center max-w-[22rem]'>
								<img
									className='shadow-md'
									src={image}
									alt=''
								/>
							</div>
						</Fade>
					);
				})}

				{/* FOLLOW US TEXT */}
				<Fade
					bottom
					distance='1rem'
					delay={50}>
					<div className='mb-5 order-first lt:order-last '>
						<div className='grid lt:grid-cols-3 '>
							<h1
								className='font-bold text-black 
                text-[1.4rem]
                leading-8
                iPad: text-center
                lt:text-start
                lt:text-lg
                lt:pt-[1rem]
                '>
								<a
									href='https://www.instagram.com/fluffkoppicafe/?hl=en'
									target='_blank'>
									<div className='flex'>
										{/* <BsInstagram
											size={25}
											className='inline-block'
										/>{' '} */}
										@fluffkoppicafe
									</div>
								</a>
							</h1>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
}
