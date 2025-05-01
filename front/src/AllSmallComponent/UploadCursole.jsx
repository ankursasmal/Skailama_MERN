import React, { useState } from 'react';
import Text from './Text';
 import { toast } from 'react-toastify';
import SummeryApi from '../summeryApi';

function UploadCursole({ closes, projects_ID ,onclose}) {
  const [data, setData] = useState({ transcript: '', upload_link: '' });
let [projects_IDs,setprojects_ID]=useState(projects_ID);
const project_Id = JSON.parse(localStorage.getItem("ProjectId"));

  const handelData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handelProjectFile_Upload = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(SummeryApi.Upload_Files.url+`${project_Id}`, {
        method: SummeryApi.Upload_Files.method,  
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
// console.log(res);
      const result = await res.json();
      // console.log(result);

      if (result.success) {
        toast.success('File uploaded successfully!');
        onclose();
            } else {
        toast.error('Upload failed');
      }
    } catch (err) {
      toast.error('Upload error');
      console.error('Upload error:', err);
    }
  };

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-gray-100 opacity-90">
      <div className="flex flex-col p-[2rem] rounded-[1vw] shadow-xl bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/image12.png" className="w-[4rem] h-[3.9rem] object-contain mr-[8px]" />
            <Text
              fonts="Roboto"
              fontWeight="700"
              Line_height="109.00000000000001%"
              TextSize="1.9rem"
              letterSpaceing="10.26px"
              TextChildrem="Upload from Youtube"
              color="black"
            />
          </div>
          <img
            src="/material-symbols_close-rounded.png"
            className="w-[3rem] h-[3rem] object-contain mr-[8px] cursor-pointer"
            onClick={closes}
            alt="Close"
          />
        </div>

        <form onSubmit={handelProjectFile_Upload}>
          <div className="flex flex-col items-start">
            <label className="text-[.9rem] font-medium mt-[20px]">YouTube Video Link</label>
            <input
              type="text"
              name="upload_link"
              value={data.upload_link}
              onChange={handelData}
              placeholder="https://youtube.com/..."
              className="px-[1.8rem] w-[60vw] text-[.9rem] font-semibold py-[.5rem] border-[1.28px] bg-[#FFFFFF] rounded-[.5vw] mt-[3px]"
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="text-[.9rem] font-medium mt-[20px]">Transcript</label>
            <textarea
              rows={4}
              name="transcript"
              value={data.transcript}
              onChange={handelData}
              placeholder="Paste transcript here..."
              className="px-[1.8rem] w-[60vw] text-[.9rem] font-semibold py-[.5rem] border-[1.28px] bg-[#FFFFFF] rounded-[.5vw] mt-[3px]"
            />
          </div>

          <div className="flex items-center justify-end w-[60vw] mt-[20px]">
            <button
              type="submit"
              className="px-[12px] py-[6px] text-white font-medium bg-black rounded-[.3vw]"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadCursole;
