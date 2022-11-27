import React from 'react'
import { contact as contactObj } from "@/data/contact";
import ContactList from '../components/contact/ContactList'
import bread from '../assets/contactimg.png'
// const { contact, press, email, events, bookings, marketing } = contactObj;

export const Contact = () => {

  return (
    <div
      className='
    bg-white 
    flex
    flex-col
    text-black
    p-[10%]
    iPad:flex
    iPad:flex-row
    iPad:justify-between
    iPad:
    '>      
      <div>
        <div className='uppercase mb-7'>
          <h1 className='font-bold text-[1.5rem]'>CONTACT US</h1>
        </div>
        <div>
          <ContactList />
        </div>
      </div>

      <div className='mt-10 iPad:max-w-[18.5rem] '>
        <img src='https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' alt="" />
      </div>
    </div>
  );
};
