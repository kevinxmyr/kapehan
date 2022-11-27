import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { smallbites } from "../data/smallbites";

const Container = (props) => {
  return (
    // CONTAINER OF ALL
    <div className='max-w-[768px] lt:flex lt:flex-col mx-[auto] py-[2rem] flex flex-col'>
      <div className='uppercase text-[1.6rem] font-bold font-poppins mb-7'>
        small bites
      </div>
      <div className="lt:grid lt:grid-cols-2 lt:gap-16">
        {props.children}
      </div>
      <div>
        <Link to='/menu'>
          <div className='bg-navbar text-white text-center w-[11rem] py-3 mt-10'>
            <button className="font-bold">View the Menu</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Item = (props) => {
  const { title, description, price } = props;
  return (
    <React.Fragment>
      <div className='lt:grid grid'>
        <div className='lt:col-start-1 mb-5'>
          <div className=' uppercase text-[1.1rem] lt:pb-4'>{title}</div>
          <div className=''>{description}</div>
        </div>
        <div className='lt:col-start-2 col-start-2 justify-self-end'>
          {price}
        </div>
      </div>
    </React.Fragment>
  );
};

export default function Smallbites() {
  const Loop = smallbites.map((item) => {
    return (
      <div className=''>
        <Item
          title={item.title}
          description={item.description}
          price={item.price}
        />
      </div>
    );
  });

  return (
    // MAIN BACKGROUND WHITE
    <div className='bg-white text-black p-[5%] font-rufina'>
      <Container>{Loop}</Container>
    </div>
  );
}
