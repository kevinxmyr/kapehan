import React from "react";

export default function ContactItem(props) {
  const keysLoop = props.item.map((key) => {
    const test = Math.random(key)
    console.table(key)
    return (
       <div key={test}>
          <div className="uppercase mb-2 font-rufina">
             {key[0]}
             
          </div>
          <div className="mb-5 font-rufina">
             {key[1]}
          </div>
       </div>
    )
 })
  return (
    <div className=''>
      <div className="mb-5 mt-5">
        {keysLoop}
      </div>
    </div>
  );
}
