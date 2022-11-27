import React from "react";

export default function Book() {
  return (
    <div className='bg-white text-black min-h-[50vh] min-w-[100%] py-7'>
      {/* WRAPPER */}
      <div className='p-[5%]'>
        <style jsx='true'>
          {`
            .padbot {
              margin-bottom: .5rem;
              // background-color: red;
            }
          `}
        </style>
        <div className=''>
          <h1 className='uppercase font-bold text-[1.5rem] mb-5'>
            book a table
          </h1>
          <p className='mb-5'>
            Whatever the occasion, we’re certain that you can make it special at{" "}
            <strong>Fluff Koppi.</strong>{" "}
          </p>
        </div>

        {/* FORM */}
        <div className=''>
          <div className='mb-3'>
            <label>*Full Name:</label>
            <br />
            <input
              required
              className='bg-[#f1f1f1] p-2 padbot'
              type='text'
              placeholder='Full Name'
            />
            <br />
          </div>

          <div className='mb-3'>
            <label>*E-Mail:</label>
            <br />
            <input
              required
              className='bg-[#f1f1f1] p-2 padbot'
              type='email'
              placeholder='E-mail'
            />
            <br />
          </div>

          <div className='mb-3'>
            <label className=''>*Your Message:</label>
            <br />
            <textarea
              required
              className='bg-[#f1f1f1] p-2 padbot'
              placeholder='Your message here...'
              rows='5'
            />
          </div>

          <div className='bg-navbar text-white w-[7rem] text-center py-[.5rem] mt-[2rem]'>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
