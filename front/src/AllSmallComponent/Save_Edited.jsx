import React, { useEffect, useState } from 'react'
import DashNav from './DashNav'
import Text from './Text'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import SummeryApi from '../summeryApi';

function Save_Edited() {
  const project_Id = JSON.parse(localStorage.getItem("ProjectId"));
  const index = JSON.parse(localStorage.getItem("Project_file_index"));
  const Project_file_index = Number.parseInt(index);

  let [uplod, setUpload] = useState([]);
  let [transcriptText, setTranscriptText] = useState(""); // <-- New state for editable transcript
  let navigate = useNavigate();

  const handelProjectUploadInfo = async () => {
    try {
      const res = await fetch(SummeryApi.projects_Edit_Save.url+`${project_Id}`, {
        method: SummeryApi.projects_Edit_Save.method,
        credentials: 'include',
      });

      const result = await res.json();
      if (result.success) {
        setUpload(result.data.files);
        const currentTranscript = result.data.files[Project_file_index]?.transcript || "";
        setTranscriptText(currentTranscript); // <-- Initialize editable text
      }
    } catch (err) {
      console.error('project error:', err);
    }
  };

  useEffect(() => {
    handelProjectUploadInfo();
  }, []);

  //   Save transcript 
  const handleSave = async () => {
    try {
      const res = await fetch(SummeryApi.save_teanscript.url+`${project_Id}/file/${Project_file_index}`, {
        method: SummeryApi.save_teanscript.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          transcript: transcriptText
        }),
      });
  
      const result = await res.json();
      if (result.success) {
        
        toast.success("Transcript updated!");
        navigate('/view-project')
      } else {
        console.error("Update failed:", result.message);
      }
    } catch (err) {
      console.error("Error updating transcript:", err);
    }
  };
  

  return (
    <div className='flex flex-col items-start'>
      <DashNav />
      <div className='mt-[2rem]'>
        <div className='flex items-center justify-between w-[72vw]'>
          <Link to='/uploadpgae' className='cursor-pointer'>
            <Text fonts='Roboto' fontWeight='600' Line_height='100%' TextSize='1.7rem' letterSpaceing='10.26px' TextChildrem='<- Add Podcast' color='black' />
          </Link>
          <div className='flex items-center '>
            <button className='px-8 py-2 rounded-[.3vw] border-[1px] border-red-700 text-[1.1rem] hover:bg-red-600 hover:text-white font-normal text-red-600 cursor-pointer'  onClick={()=>{handelProjectUploadInfo();navigate('/view-project')}}>Discard</button>
            <button className='px-10 py-2 bg-black ml-4 rounded-[.5vw] border-[1.5px] text-[1.1rem] font-semibold text-white cursor-pointer hover:bg-blue-600  ' onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center w-[72vw] px-[4vw] py-[2vw] border-[0.1px] border-gray-400 rounded-xl shadow-xl mt-[2vw]'>
        <div className='flex items-start flex-col w-[66vw] py-[1vw] rounded-xl'>
          <Text fonts='Roboto' fontWeight='700' Line_height='100%' TextSize='1.3rem' letterSpaceing='10.26px' TextChildrem='Speaker' color='#7E22CE' />
          <textarea
            value={transcriptText}
            onChange={(e) => setTranscriptText(e.target.value)} // <-- Make it editable
            className='py-[1vw] px-2 text-[.8rem] h-[30vw] font-normal w-[100%]'
          />
        </div>
      </div>
    </div>
  )
}

export default Save_Edited;
