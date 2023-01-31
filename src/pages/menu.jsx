import { meals } from '@/data/meals';
import { snacks } from '@/data/snacks';
import { SlArrowDown } from 'react-icons/sl';

// const Box = ({ children, title }) => (
// 	<div className='bg-white text-black'>
// 		<div className='font-bold text-xl px-40 pt-[7rem] pb-12'>{title}</div>
// 		<div className='font-rufina'>
// 			<div className='grid grid-cols-2 px-20'>{children}</div>
// 		</div>
// 	</div>
// );

// const Item = ({ name, price, description }) => (
// 	<>
// 		<div className='grid w-[70%] gap-2 ring-2 ring-red-400'>
// 			<div className='uppercase text-lg'>{name}</div>
// 			<div>{description}</div>
// 		</div>

// 		<div>{price}</div>
// 	</>
// );

const Box = ({children, title}) => (
  <div className='p-10 max-w-[70rem] m-[0_auto]'>
    <div className='font-bold text-[1.5rem] mb-10'>{title}</div>
    <div className='ipadpro:grid ipadpro:grid-cols-2 ipadpro:gap-12'>{children}</div>
    
  </div>
);

const Item = ({ name, price, description }) => (
	<>
		<div className='grid grid-cols-2 gap-5'>
		
			<div className='ring-'>
				<p className='font-bold text-[1.1rem]'>{name}</p>
			</div>
			
			<div className='ring- ring-red-400 justify-self-end'>
				<p className='font-rufina text-[1.1rem]'>{price}</p>
			</div>
			
			<div className='ring- ring-green-300 mb-5 font-rufina text-[1.05rem]
			col-span-2'>
				<p>{description}</p>
			</div>
			
		</div>
	</>
);

export const Menu = () => {

	const mealsmap = meals.map((item) => {
		const { name, price, description } = item;
		return (
			<div key={name}>
				<Item
					name={name}
					price={price}
					description={description}
				/>
			</div>
		);
	});
	// const snacksMap = snacks.map((x) => {
	// 	const { name, price, description } = x;
	// 	return (
	// 		<div
	// 			key={snacks.indexOf(x) + 1}
	// 			className='flex my-12 justify-center'>
	// 			<Item
	// 				name={name}
	// 				price={price}
	// 				description={description}
	// 			/>
	// 		</div>
	// 	);
	// });

	// const mealsMap = meals.map((x) => {
	// 	const { name, price, description } = x;
	// 	return (
	// 		<div
	// 			key={meals.indexOf(x) + 1}
	// 			className='flex my-12 justify-center'>
	// 			<Item
	// 				name={name}
	// 				price={price}
	// 				description={description}
	// 			/>
	// 		</div>
	// 	);
	// });

	return (
		<div className='bg-white text-itim'>
		  {/* MEALS */}
			<Box title='Meals'>
        {mealsmap}
      </Box>
			
			{/* Snacks */}
      <div> 

      </div>
			{/* <div
				className='
        uppercase font-bold bg-its-menu h-[28rem] bg-center px-40 flex 
        text-4xl items-center
      text-black '>
				<SlArrowDown className='animate-bounce'></SlArrowDown>
			</div>

			<Box title='Snacks'>{snacksMap}</Box>

			<Box title='Meals'>{mealsMap}</Box> */}
		</div>
	);
};
