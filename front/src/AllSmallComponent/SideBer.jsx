import React, { useContext, useEffect } from 'react'
import Options from './Options'
import Text from './Text'
import { Link } from 'react-router-dom'
import { Context } from '../App'
import { useSelector } from 'react-redux'

function SideBer() {
  let {AuthUserDetail}=useContext(Context);
  let user=useSelector(state=>state.user.user);
  // console.log(user)

  useEffect(()=>{
    AuthUserDetail();
  },[]);
  return (
    <div className='flex items-start py-[1.5rem] flex-col h-[100vh] justify-between shadow-xl  md:w-[24vw]     px-[1px]'>
        <div className='flex items-start  flex-col w-[100%]'> 
         <img src="/QuesLogo.png" className="w-[10rem] h-[2.1rem] object-contain ml-[1.5rem]" />
         <Link to='/uploadpgae'>  <Options text_option='Add your Podcast(s)' imag='/Vectors.png'  /></Link>
         <Options text_option='Create & Repurpose' imag='/Vector26.png'  />
         <Options text_option='Podcast Widget' imag='/Vector20.png'  />
         <Options text_option='Upgrade' imag='/diamond.png'  />
         <div className='w-[86%] h-[1px] bg-[#DBDBDB] mt-[20px] mx-[1.5rem] '></div>

         </div>
         <div className='flex items-start flex-col w-[100%]'>
         <Options text_option='Help' imag='/cog.png'  />

         <div className='w-[86%] h-[1px] bg-[#DBDBDB] my-[1rem] mx-[1.5rem]'></div>
         <div className='flex items-center '>
         <img src="/QuesLogo.png" className="w-[2.4rem] h-[2.4rem] object-contain ml-[1.5rem] rounded-xl border-[0.4px] " />
<div className='flex items-start flex-col pl-[5px]'>
<Text fonts='Roboto' fontWeight='700' Line_height='100%' TextSize='1.1rem' letterSpaceing= '10.26px' TextChildrem={user?.name} color='black'/>     
<div className='top-[40px]'>
<Text fonts='Roboto' fontWeight='400' Line_height='100%' TextSize='.8rem' letterSpaceing= '10.26px' TextChildrem={user?.email} color='black'/>     
</div>

</div>
         </div>
         </div>
          </div>
  )
}

export default SideBer
