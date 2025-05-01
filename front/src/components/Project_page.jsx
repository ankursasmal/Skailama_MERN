import React, { useEffect, useState } from 'react'
import Text from '../AllSmallComponent/Text';
import Create_Nav from '../AllSmallComponent/Create_Nav';
import CreateCarsole from '../AllSmallComponent/CreateCarsole';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { StoreProjectId } from '../Redux/userSlice';
import SummeryApi from '../summeryApi';

function Project_page() {
      let [close,setClose]=useState(false);
     const [data, setData] = useState([]);
       const navigate = useNavigate();
    let dispatch=useDispatch();
      
      // console.log(data)
    
      const handelProjectDetails = async () => {
     
           try {
              const res = await fetch(SummeryApi.Get_allProject.url, {
              method: SummeryApi.Get_allProject.method,
              credentials:'include',
             
            });
            // console.log(res)
            const result = await res.json();
            // console.log(result)
            if (result.success) {
              toast.success('project come successful');
              setData(result.data)
             } else {
     
              toast.error('project not come failed');
            }
          } catch (err) {
            toast.error('project failed');
     
            console.error('project error:', err);
          }
        };

useEffect(()=>{
handelProjectDetails();
},[])


  return (
    <div  className='flex items-center  flex-col w-[100vw] min-h-[100vh]'>
    <Create_Nav/>
    <div className='flex items-center  justify-between w-[90vw] mt-[20px]  '>
    <Text fonts='Roboto' fontWeight='700' TextSize='2.1rem' color='#7E22CE' Line_height='100%' letterSpaceing= '10.26px' TextChildrem='Projects'/>     
    <button  onClick={()=>setClose(true)} className='px-[1rem] mt-[10px] rounded-[.5vw] flex items-center   text-[1.4rem] font-semibold   py-[.5rem]   bg-black   ' >
<img src='/Vector.png' className='w-[1.7rem] h-[1.5rem] object-contain mr-[10px]'/> 
<Text fonts='Roboto' fontWeight='600' Line_height='100%' TextSize='1.3rem' letterSpaceing= '10.26px' TextChildrem='Create New Project ' color='white'/>     
</button>
</div>
<div className='flex items-center  gap-[10px] flex-wrap  w-[90vw] mt-[20px] px-[10vw]'>
{
  data?.map((val,i)=>{
    return (
      <div key={i} className='flex border-[1px] rounded-xl p-2 items-center justify-between w-[300px] h-[100px] '  onClick={()=>{localStorage.setItem("ProjectId", JSON.stringify(val._id));  navigate(`/uploadpgae?${val._id}`)}}>
        <div className='p-1 rounded-xl bg-[#F8A01D] text-white font-bold text-[2vw] w-[50px] h-[50px]'><a className='flex items-center justify-center'> {val.projectName[0]}</a></div>
        <div className='flex items-start flex-col'>
        <span className='text-[1.6rem] font-semibold'>{val.projectName}</span>
        <span className='text-[1rem] font-thin'>{val.project_time}</span>
        </div>
        </div>
    )
  })
}
</div>
      
     
{close?<div className='absolute top-[0px] left-[0px]'><CreateCarsole  closes={()=>setClose(false)}/></div>:null}
   
</div>
  )
}

export default Project_page
