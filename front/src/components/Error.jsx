import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh]'>
     
     <div className='flex items-center flex-col'> 
        <span className='text-red-800 text-[3vw] font-semibold'>Error page Page not foune</span>
      <Link to='/home' className='px-6 py-3 bg-black rounded-2xl mt-7 text-white text-[2.2vw]'>Go Back to Home</Link>
      </div> 
    </div>
  )
}

export default Error
