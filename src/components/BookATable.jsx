import { Link } from 'react-router-dom'

export const BookATable = () => (
  <div className="bg-navbar py-10 px-[3rem]
  iPad:px-[20%]
  lt:px-[5%]
  ">
    

    <div className="grid gap-2 w-100">

      <div className="uppercase font-bold text-2xl mb-2">book a table</div>

      <div className="font-rufina max-w-[24rem]">
        Breakfast, lunch, or weekend brunch, we're always open for reservations.
      </div>

      <Link to="/book">

        <button className="bg-white text-black font-rufina px-10 py-4 text-sm mt-4">
          Book a table
        </button>

      </Link>

    </div>
  </div>
)