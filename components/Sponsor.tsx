import Image from 'next/image'
import React from 'react'

function Sponsor ()  {
  return ( 
  <div className='flex items-center justify-center text-gray-400 text-2xl font-bold min-h-[11vh]' >Sponsored by: &nbsp;
    <ul className='flex justify-center gap-10 ml-10' >
      {[1].map((num) => <li key={num} className='relative h-[10rem] w-[8rem]' >
        <Image alt='sponsor' fill src={`images/sponsor${num}.svg`}/>
      </li>)}
    </ul>
  </div>
  );
}

export default Sponsor