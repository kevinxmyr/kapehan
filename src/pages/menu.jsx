import { meals } from '@/data/meals'
import { snacks } from '@/data/snacks'
import { SlArrowDown } from 'react-icons/sl'

const Box = ({ children, title }) => (
  <div className="bg-white text-black">
    <div className="font-bold text-xl px-40 pt-[7rem] pb-12">{title}</div>
    <div className="font-rufina">
      <div className="grid grid-cols-2 px-20">
        {children}
      </div>
    </div>
  </div>
)

const Item = ({ name, price, description }) => (
  <>
    <div className="grid w-[70%] gap-2">
      <div className="uppercase text-lg">{name}</div>
      <div>{description}</div>
    </div>
    <div>{price}</div> 
  </>
)


export const Menu = () => {

  const snacksMap = snacks.map(x => {
    const { name, price, description } = x
    return (
      <div key={snacks.indexOf(x) + 1} className="flex my-12 justify-center">
        <Item name={name} price={price} description={description} />
      </div>
    )
  })

  const mealsMap = meals.map(x => {
    const { name, price, description } = x
    return (
      <div key={meals.indexOf(x) + 1} className="flex my-12 justify-center">
        <Item name={name} price={price} description={description} />
      </div>
    )
  })
  
  return (
    <div>
      <div className="
        uppercase font-bold bg-its-menu h-[28rem] bg-center px-40 flex 
        text-4xl items-center
      text-black "> 
        <SlArrowDown className='animate-bounce'></SlArrowDown>
      </div>

      <Box title="Snacks">
        {snacksMap}
      </Box>

      <Box title="Meals">
        {mealsMap}
      </Box>

    </div>
  )  
}

