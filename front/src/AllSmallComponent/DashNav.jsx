import React from 'react'
import Text from './Text'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import SummeryApi from '../summeryApi';

function DashNav() {
       const navigate = useNavigate();
       
let handelLogout=async()=>{
try{
  const res = await fetch(SummeryApi.Logout.url, {
    method: SummeryApi.Logout.method,
    credentials:'include',
   
  });
   const result = await res.json();
   if (result.success) {
     toast.success('Logout successful');
     navigate('/');
    } else {

    // toast.error('project not come failed');
  }
}
catch(e){
     toast.error('project not come failed');

}
}

  return (
    <div className='flex items-center justify-between w-[100%]'>
        <div className='flex items-center'> 
               <img src="/home.png" className="w-[1.3rem] h-[1.3rem] object-contain mr-[3px]" />
               <Text fonts='Roboto' fontWeight='400' Line_height='100%' TextSize='1.1rem' letterSpaceing= '10.26px' TextChildrem={'Home Page '} color='#646464'/> <a>{" "}</a>    
               <Text fonts='Roboto' fontWeight='400' Line_height='100%' TextSize='1.1rem' letterSpaceing= '10.26px' TextChildrem={'/ Sample Project' } color='#646464'/>  <a>{" "}</a>      
               <Text fonts='Roboto' fontWeight='400' Line_height='100%' TextSize='1.1rem' letterSpaceing= '10.26px' TextChildrem={'/ Add your podcast' } color='#646464'/>   
 
               </div>

               <div className='flex items-center '>
               <img src="/bell.png" className="w-[1.2rem] h-[1.1rem] object-contain mr-[7px]" />
         <img src="/logout.png" className="w-[1.2rem] h-[1.1rem] object-contain cursor-pointer" onClick={handelLogout} /> 

               </div>
    </div>
  )
}

export default DashNav
