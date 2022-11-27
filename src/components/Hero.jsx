import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Fade } from "react-reveal";
import { address } from "../data/address";

export default function Hero(props) {
  return (
    <div
    className='container
      flex
      bg-slate-900
      min-h-[65vh]
      min-w-[100%]
      bg-heroImg 
      bg-center 
      bg-no-repeat
      bg-cover

    iPad:text-[1.2rem]
    lt:min-h-[87vh]
    '>
      <style jsx='true'>
        {`
          .anino{
            text-shadow: 2px 2px #000000;
          }
          .rec {
            position: relative;
          }
          .rec::after {
            position: absolute;
            right: 0%;
            top: 55%;
            content: "";
            width: 150px;
            height: 10px;
            background-color: #f5f5dc;
            opacity: 0.5;
            z-index: -1;
            animation: example 1.4s ease 1 alternate;
          }
          @keyframes example {
            0% {
              width: 0;
            }
            100% {
              width: 150px;
            }
          }
        `}
      </style>
      
      {/* HERO CONTENT */}
      <div
        className='wrapper 
      h-[auto]
      flex
      justify-center
      flex-col
      p-[10%]'>

        <Fade bottom distance='20px'>
          <div className='flex '>
            <h1
            className='rec 
            leading-[3rem]
            font-bold
            text-[3rem]
            pb-5
            iPad:text-[3.4rem]
            lt:text-[4rem]
            anino
          '>
              FLUFF KOPPI.
            </h1>
          </div>
        </Fade>

        <Fade bottom distance='18px'>
          <div className='flex flex-col max-w-md'>
            <Fade bottom distance='20px' delay={350}>
              <p
                className='
              font-rufina
              pb-[5rem]
              lt:text-[1.4rem]
              anino
            '>
                {address.address}
              </p>
            </Fade>
            <Fade bottom distance='16px' delay={750}>
              <div className='socials flex'>
                <a
                  href='https://www.facebook.com/Fluffkoppicafe/'
                  target='_blank'>
                  <FaFacebook size={27} className='social-icon shadow' />
                </a>
                <a
                  href='https://www.instagram.com/fluffkoppicafe/?hl=en'
                  target='_blank'>
                  <FaInstagram size={28} className='social-icon w-7 ml-3' />
                </a>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
}
{
  /* <div
className='bg-cover pt-[10rem] pl-[3rem] min-h-[90vh] bg-heroImg bg-center
'>
<Fade bottom distance='30px'>
  <div className='m-20'>
    <h1 className='text-7xl pb-10 font-bold text-white'>
      FLUFF KOPPI CAFÉ
    </h1>
    <p className='text-white  text-[1.5rem] font-rufina'>
      Purok 6 Brgy San Miguel Mabitac, Laguna, Mabitac, Philippines, 4020
    </p>
  </div>
</Fade>

<Fade bottom delay={500}>
  <div className='flex mt-48 ml-20'>
    <a href='https://www.facebook.com/Fluffkoppicafe/' target='_blank'>
      <FaFacebook size={27} className='social-icon shadow' />
    </a>
    <a
      href='https://www.instagram.com/fluffkoppicafe/?hl=en'
      target='_blank'>
      <FaInstagram size={27} className='social-icon w-7 ml-3' />
    </a>
  </div>
</Fade>
</div> */
}
