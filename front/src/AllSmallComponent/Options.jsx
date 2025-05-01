import React from 'react'
import Text from './Text'

function Options({text_option,imag}) {
    console.log(imag)
  return (
    <div    className='px-[1.5rem] hover:bg-[#F3E8FF88] rounded-[.5vw] flex items-center mt-[15px] pl-[1.5rem]       py-[.5rem]    ' >
<img src={`${imag}`} className='w-[.8rem] h-[.8rem] object-contain mr-[10px]'/> 
<Text fonts='Roboto' fontWeight='400' Line_height='100%' TextSize='1.2rem' letterSpaceing= '10.26px' TextChildrem={text_option} color='#646464'/>     
</div>
  )
}

export default Options
