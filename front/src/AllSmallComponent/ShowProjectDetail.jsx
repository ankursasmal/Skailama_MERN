import React, { useEffect, useState } from 'react'
import DashNav from './DashNav'
import Text from './Text'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SummeryApi from '../summeryApi';

function ShowProjectDetail() {
  const project_Id = JSON.parse(localStorage.getItem("ProjectId"));
const index=JSON.parse(localStorage.getItem("Project_file_index"));
const  Project_file_index=Number.parseInt(index);
 let [uplod,setUpload]=useState([]);
let navigate=useNavigate();
  const handelProjectUploadInfo = async () => {
           
                 try {
                    const res = await fetch(SummeryApi.Get_projects.url+`${project_Id}`, {
                    method: SummeryApi.Get_projects.method,
                    credentials:'include',
                   
                  });
                  //  console.log(res)
                  const result = await res.json();
                    // console.log(result)
                  if (result.success) {
                    // toast.success('project upload successful');
                    setUpload(result.data.files)
                    // console.log(data)
                   } else {
           
                    // toast.error('project not come failed');
                  }
                } catch (err) {
                  // toast.error('project failed');
           
                  console.error('project error:', err);
                }
              };
      
      useEffect(()=>{
        handelProjectUploadInfo();
      },[])

      let Transcript= uplod[Number.parseInt(Project_file_index)]?.transcript;
      // console.log("Transcript",Transcript);

   return (
    <div className='flex flex-col items-start'>
    <DashNav/>
    <div className='mt-[2rem]'>
    <div className='flex items-center justify-between w-[72vw]'>
     <Link to='/uploadpgae' className='cursor-pointer' >  <Text fonts='Roboto' fontWeight='600' Line_height='100%' TextSize='1.7rem' letterSpaceing= '10.26px' TextChildrem='<- Add Podcast' color='black'/>  </Link>   
    <button className='px-8 py-2 bg-black rounded-xl border-[1.5px] text-[1.1rem] font-semibold text-white'  onClick={()=>navigate('/edit-transcript')}>Edit</button>
    </div>
  </div>
  <div className='flex items-center justify-center w-[72vw] px-[4vw] py-[2vw]  border-[0.1px] border-gray-400 rounded-xl shadow-xl mt-[2vw]'>
      {/* rounded-xl border-[0.4px] */}
      <div className='flex items-start flex-col   w-[66vw]    py-[1vw]  rounded-xl  '>
      <Text fonts='Roboto' fontWeight='700' Line_height='100%' TextSize='1.3rem' letterSpaceing= '10.26px' TextChildrem='Speaker' color='#7E22CE'/>     
      <div className='  w-full min-h-[50vh] overflow-x-hidden block'>
  <span className='py-[1vw] text-[.8rem] font-normal'>{Transcript}</span>
</div>      </div>
      </div>
</div>
  )
}

export default ShowProjectDetail
