import React from 'react'
import SideBer from '../AllSmallComponent/SideBer'
import UploadDashBoard2nd from '../AllSmallComponent/UploadDashBoard2nd'
import { useLocation } from 'react-router-dom';

function UploadDashBoard() {
  const location = useLocation();
  
  // Get the query string (e.g., ?6811f9551a8b31e253ce7af9)
  const query = new URLSearchParams(location.search);
  
  // Since your query doesn't have a key (like ?id=...), use location.search directly
  const ids = location.search.replace('?', '');

  // console.log('ID from URL:', ids);
  return (
    <div className='flex    '>
      {/* sideBar */}
      <div className=' '>
<SideBer/>
      </div>
      <div className='m-[2vw] md:w-[76vw]'>
<UploadDashBoard2nd IDS={ids}/>

</div>
    </div>
  )
}

export default UploadDashBoard
