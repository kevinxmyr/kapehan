import React from "react";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";

export default function Footer() {
  return (
    <div
      className='
      bg-beige
      text-black 
      font-rufina 
      max-w-[100%]
      p-[3rem_3rem]
      flex
      flex-col
      iPad:pl-[20%]
      lt:flex-row
      lt:p-[4rem_4rem]
      '>
      {/*---------------------- LEFT DIV -------------------*/}
        <div className='
          mb-[2rem]
          max-w-[23rem]
          lt:mr-[5%]
          '>

            {/* FLUFF KOPPI LOGO */}
            <div className="mb-[2rem]">
              <h1 className="
                text-[1.3rem]
                font-bold
                font-poppins
              ">FLUFF KOPPI.</h1>
            </div>

            {/* ADDRESS */}
            <div className="mb-[2rem]">
              <p>
                Purok 6 Brgy San Miguel Mabitac, Laguna, Mabitac, Philippines, 4020
              </p>
            </div>

            {/* SCHEDULE */}
            <div className="mb-[2rem]">
              <p>MONDAY - FRIDAY <br/> 6:00 AM TO 9:00 PM</p>
            </div>

            {/* SCHEDULE */}
            <div className="">
              <p>SATURDAY - SUNDAY <br/> 10:00 AM TO 8:00 PM</p>
            </div>

        </div>

      {/* RIGHT DIV */}
      <div className="flex flex-col max-w-[22rem]
      lt:pt-[3.5rem] 
      ">

          {/* OFFICE */}
          <div className="mb-[2rem]">
            <p>
              <strong> Office: </strong>Purok 6 Brgy San Miguel Mabitac, Laguna, Mabitac, Philippines,
              4020
            </p>
          </div>

          {/* CONTACT */}
          <div className="mb-[2rem]">
            <p>Contact : 4400 - 88 - 823</p>
          </div>

        {/* SOCIAL MEDIA */}
        <div className="flex ">
          <a href='#'>
            <img className="w-[auto] h-[2rem] mr-[1rem]" src={fb} alt='fb' />
          </a>
          <a href='#'>
            <img className="w-[auto] h-[2rem]" src={ig} alt='ig' />
          </a>
        </div>

      </div>
    </div>
  );
}
