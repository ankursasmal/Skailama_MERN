
import React from 'react'
import Text from './Text'

function FeatureBox({imgs,names}) {
  return (
    <div className='flex items-center p-[1.4rem] rounded-xl border-[0.4px] w-[30vw] md:w-[22vw]  '>
 <div className='flex items-start flex-col pl-[5px] '>
<Text fonts='Roboto' fontWeight='600' Line_height='100%' TextSize='1.6rem' letterSpaceing= '10.26px' TextChildrem={names} color='black'/>     
 
<Text fonts='Roboto' fontWeight='400' Line_height='100%' TextSize='.7rem' letterSpaceing= '10.26px' TextChildrem={'Lorem ipsum dolor sit. Dolor lorem sit.'} color='black'/>     
 
</div>
<img src={imgs} className="w-[4.5rem] h-[4.5rem] object-contain mr-[2rem]  " />


    </div>
  )
}

export default FeatureBox

