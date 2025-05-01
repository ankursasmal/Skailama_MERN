import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SummeryApi from '../summeryApi';

 

const Table_file = ({project_id}) => {
  let [projectId,setProjectId]=useState(project_id);
  const project_Id = JSON.parse(localStorage.getItem("ProjectId"));

  let [data,setData]=useState([]);
       const navigate = useNavigate();


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
                setData(result.data.files)
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

  // for delaet specific upload row
  const handleDelete = async (index) => {
    if (!window.confirm(" you want to delete this file?")) return;
  
   
    try {
      const res = await fetch(SummeryApi.Delete_Upload_file.url+`${project_Id}/file/${index}`, {
        method:  SummeryApi.Delete_Upload_file.method,   
        credentials: 'include',
      });

      const result = await res.json();
      if (result.success) {
        // Remove the deleted file from the state
        setData(prev => prev.filter((_, i) => i !== index));
         toast.success("File deleted successfully");
      } else {
        console.error("Failed to delete:", result.message);
      }
    } catch (err) {
      console.error("Delete request error:", err);
    }
  };
  


  return (
    <div className='flex items-center justify-center w-[70vw] h-[43vh] overflow-y-auto px-[4vw] py-[2vw] rounded-xl shadow-xl mt-[4vw] lg:mt-[2vw]'>
     <div className='flex w-[80%] items-start flex-col'> 
      <h2 className="text-lg font-semibold mb-4">Your Files</h2>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
              <th className="p-3">No.</th>
              <th className="p-3">Name</th>
              <th className="p-3">Upload Date &amp; Time</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((file, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 text-sm">{index + 1}</td>
                <td className="p-3 font-semibold text-sm truncate w-[70px]" > {file.upload_link.slice(0, 10)+"...."}</td>
                <td className="p-3 text-sm">{file.upload_time}</td>
                <td className="p-3">
                  <div className="flex space-x-2">
                    <button className="border px-3 py-1 rounded text-sm cursor-pointer" onClick={()=>navigate(`/view-project?${index}`)}>View</button>
                    <button className="border px-3 py-1 rounded text-sm text-red-500"  onClick={()=>handleDelete(index)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Table_file;
