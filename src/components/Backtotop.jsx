import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";

function scrollup() {

}

export default function Backtotop() {
  return (
    <div className=''>
      <style>
        {`
            .btn{
               position: fixed;
               background-color: #EDE9E8;
               background-color: black;
               border-radius: 50%;
               width: 50px;
               height: 50px;
               bottom: 3%;
               right: 3%;
               box-shadow: 5px 5px 5px -4px rgba(0,0,0,0.75);
               -webkit-box-shadow: 10px 13px 29px -4px rgba(0,0,0,0.75);
               -moz-box-shadow: 10px 13px 29px -4px rgba(0,0,0,0.75);
               z-index: 9999;
            }
         `}
      </style>

      <button className='btn'>
        <RiArrowUpSLine size={50} />
      </button>
    </div>
  );
}
