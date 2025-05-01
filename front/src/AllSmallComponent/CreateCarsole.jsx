import React, { useState } from 'react'
import Text from './Text'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SummeryApi from '../summeryApi';



function CreateCarsole({closes}) {
 const [data, setData] = useState({projectName:"" });
   const navigate = useNavigate();

  const handelData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }; 
  
  // console.log(data)

  const handelProjectAdd = async (e) => {
    e.preventDefault();

       try {
          const res = await fetch(SummeryApi.projects.url, {
          method: SummeryApi.projects.method,
          credentials:'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        // console.log(res)
        const result = await res.json();
        // console.log(result)
        if (result.success) {
          toast.success('project successful');
          navigate('/project');
        } else {
          navigate('/create');

          toast.error('project name exist  ');
        }
      } catch (err) {
        toast.error('project name exist');
        navigate('/create');

        console.error('project error:', err);
      }
    };
  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh] bg-gray-100  opacity-90 '>
<div className='flex flex-col p-[1rem] rounded-[1vw] shadow-xl bg-white  '>
<Text fonts='Roboto' fontWeight='700' Line_height='109.00000000000001%' TextSize='1.5rem' letterSpaceing= '10.26px' TextChildrem=' Create Project' color='black'/>     
<form onSubmit={handelProjectAdd} className='flex flex-col items-start'>
         <label htmlFor="" className='text-[.9rem] font-medium mt-[20px]'>Enter Project Name</label>
    <input
  type="text"
  placeholder="Type Here"
  name='projectName'
  value={data.projectName}
  onChange={handelData}
  className="px-[1.8rem] w-[50vw] text-[1.4rem] font-semibold   py-[.5rem] border-[1.28px]    bg-[#FFFFFF]  rounded-[.5vw] mt-[3px]"
/> 

<div   className='flex  justify-between  mt-[3px]'>
 <Text fonts='Roboto' fontWeight='300' Line_height='109.00000000000001%' fontTextSize='.6rem' letterSpaceing= '10.26px' TextChildrem='Project name cant empty ' color='red'/>     
 <a></a>
 </div>
 {/* botton */}
 <div   className='flex items-center justify-between  w-[60vw] mt-[20px]'>
 <a></a>
<div className='flex items-center'> 
   <a className='text-[1.2rem] text-red-600 mr-[8px]' onClick={closes}>cancle</a>
    <button type='submit' className='px-[6px] py-[4px] text-white font-medium bg-[#7E22CE]  rounded-[.3vw]'  >Submit</button>
  </div>
  </div>
 <div>

 </div>
</form>

</div>
      
    </div>
  )
}

export default CreateCarsole
