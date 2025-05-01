import React from 'react'

function Create_Nav() {
  return (
    <div className='flex items-center justify-between my-[2rem] px-[4rem] w-[100vw]'>
         <img src="/QuesLogo.png" className="w-[12rem] h-[2.5rem] object-contain" />
         <div className='flex items-center'>
         <img src="/Icon.png" className="w-[3rem] h-[3rem] object-contain mr-[10px]" />
         <img src="/notifications.png" className="w-[3.3rem] h-[3.3rem] object-contain" />

         </div>
    </div>
  )
}

export default Create_Nav
