import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu, GiCoffeeBeans } from 'react-icons/gi'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  function toggleClose()  {
    return setOpen(!open);
  }
  function toggleCloseInLogo() {
    console.log('clicked');
    return setOpen(false)
  }

  return (
    <div className="bg-navbar
	  relative
    iPad:sticky
    iPad:flex 
    iPad:justify-between 
    iPad:py-8 
    iPad:px-[3rem]
    ">

      <style jsx="true">{`
        .link > a:hover {
          text-decoration: none;
        }
        .link {
          position: relative;
        }
        .link > a::before {
          content: '';
          height: 2px;
          background-color: white;
          position: absolute;
          top: 90%;
        }
        .link > a:hover::before {
          width: 100%;
        }
      //?--------------------------//
      .menu{
        position: absolute;
      }
		  .menuOpen{
        position: absolute;
        animation-name: animateOpen;
        animation-duration: .8s;
        animation-fill-mode: forwards;
		  }
      .menuClose{
        position: absolute;
        display: none;
        animation-name: animateClose;
        animation-fill-mode: forwards;
      }
      @keyframes animateOpen{
        from{
          top: -640px;
          opacity: 0;
        }
        to{
          opacity: 1;
        }
      }
      @keyframes animateClose{
        from{
          opacity: 1;
        }
        to{
          opacity: 0;
        }
      }
      `}
      </style>
      
      {/* LOGO AND BURGER MENU NAVBAR */}
      <div className='
        flex 
        justify-between 
        p-[5%]
        iPad:p-0'>
        <div className="
          font-poppins 
          font-bold 
          text-xl 
          uppercase 
          brand
          self-center
          iPad:"
          onClick={() => toggleCloseInLogo()}>
          <Link to="/">Fluff Koppi.</Link>
        </div>
    
          <button className='animate-pulse iPad:hidden' onClick={() => {
            setOpen(!open)
          }}>
            <GiHamburgerMenu size={25}/>
          </button>
      </div>
		
    {/* NAVIGATION MENU ITEMS on MOBILE*/}
    <div className={open ? 'menuOpen' : 'menuClose'}>
          <div className='
              menu
              bg-navbar
              z-[1] 
              w-[100vw]
              flex 
              flex-col
              items-center 
              gap-5
              pb-[.75rem]
            '>
            
              <div className="link" onClick={() => toggleClose()}>
                <Link to="/menu">Menu</Link>
              </div>
              <div className="link" onClick={() => toggleClose()}>
                <Link to="/contact">Contact</Link>
              </div>
              <div className="link" onClick={() => toggleClose()}>
                <Link to="/book">Book a table</Link>
              </div>  
          </div>
      </div>

      <div className="hidden gap-7 font-poppins iPad:flex iPad:items-center">

          <div className="link">
            <Link to="/menu">Menu</Link>
          </div>

          <div className="link">
            <Link to="/contact">Contact</Link>
          </div>

          <div className="link">
            <Link to="/book">Book a table</Link>
          </div>

      </div>

    </div>
  )
}
