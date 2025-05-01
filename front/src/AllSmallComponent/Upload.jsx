import React, { useState } from 'react'
import Text from './Text'
import UploadCursole from './UploadCursole'
 function Upload({project_id,onclose}) {
    let [close,setClose]=useState(false)
let [project_ids,setproject_id]=useState(project_id);
 
  return (
    <div className='flex items-center justify-center w-[70vw] px-[4vw] py-[2vw] rounded-xl shadow-xl mt-[2vw]'>
      {/* rounded-xl border-[0.4px] */}
      <div className='flex items-center flex-col w-[66vw] px-[4vw] py-[2vw]  rounded-xl border-[0.4px] '>
      <img src="/Vector33.png" className="w-[7.5rem] h-[5rem] object-contain mb-[2rem] " />
      <Text fonts='Roboto' fontWeight='400' Line_height='100%' TextSize='1.5rem' letterSpaceing= '10.26px' TextChildrem={'      Select a file or drag and drop here (Podcast Media or Transcription Text)' } color='#646464'/>   
     <div className='my-[1rem]'> 
      <Text fonts='Roboto' fontWeight='400' Line_height='100%' TextSize='1.1rem' letterSpaceing= '10.26px' TextChildrem={'             MP4, MOV, MP3, WAV, PDF, DOCX or TXT file ' } color='#646464'/>   
      </div>
<button className='text-[1.3rem] px-4 py-2 rounded-full border-[0.4px] text-[#7E22CE] ' style={{fontWeight:'400'}} onClick={()=>setClose(true)}>Select File</button>   
   </div>
   {close? <div className='absolute top-[0px] left-[0px]'><UploadCursole onclose={onclose} projects_ID={project_ids} closes={()=>setClose(false)}/></div>:null}
    </div>
  )
}

export default Upload
