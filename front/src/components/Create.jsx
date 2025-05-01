import React, { useContext, useEffect, useState } from 'react'
import Create_Nav from '../AllSmallComponent/Create_Nav'
import Text from '../AllSmallComponent/Text'
import Group16 from '../assets/Group16.png'
import CreateCarsole from '../AllSmallComponent/CreateCarsole';
import { Context } from '../App';

function Create() {
  let [close,setClose]=useState(false);
  // console.log(close)
  let {AuthUserDetail}=useContext(Context);
  useEffect(()=>{
    AuthUserDetail();
  },[])

  return (
    <div  className='flex items-center  flex-col w-[100vw] min-h-[100vh]'>
        <Create_Nav/>
        <div className='flex items-center  flex-col w-[70vw]   '>
        <Text fonts='Roboto' fontWeight='700' TextSize='2.7rem' color='#7E22CE' Line_height='100%' letterSpaceing= '10.26px' TextChildrem='Create a New Project'/>     
                 <img src={Group16} className="w-[422px] h-[296px] object-contain mt-[15px] mb-[10px]" />
        <div className='w-[70vw] text-center'>
        <Text fonts='Roboto' fontWeight='400' TextSize='.9rem' color='black' Line_height='100%' letterSpaceing= '10.26px' TextChildrem='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in'/>     
         </div>
         <button  onClick={()=>setClose(true)} className='px-[1rem] mt-[20px] rounded-[.5vw] flex items-center   text-[1.4rem] font-semibold   py-[.5rem]   bg-black   ' >
<img src='/Vector.png' className='w-[1.7rem] h-[1.5rem] object-contain mr-[10px]'/> 
<Text fonts='Roboto' fontWeight='600' Line_height='100%' TextSize='1.3rem' letterSpaceing= '10.26px' TextChildrem='Create New Project ' color='white'/>     
</button>
 {close?<div className='absolute top-[0px] left-[0px]'><CreateCarsole  closes={()=>setClose(false)}/></div>:null}
        </div>
      
    </div>
  )
}

export default Create
