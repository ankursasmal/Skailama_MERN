import React from 'react'
import SideBer from '../AllSmallComponent/SideBer'
 import ShowProjectDetail from '../AllSmallComponent/ShowProjectDetail'
import { useLocation } from 'react-router-dom';

function ViweProjectDetail() {
   const location = useLocation();
   const query = new URLSearchParams(location.search);
      const ids = location.search.replace('?', '');

  if(ids){
  localStorage.setItem("Project_file_index", JSON.stringify(ids));
  }

  // console.log('data',ids);

  
  return (
    <div className='flex    '>
    {/* sideBar */}
    <div className=' '>
<SideBer/>
    </div>
    <div className='m-[2vw] md:w-[76vw]'>
<ShowProjectDetail/>

</div>
  </div>
)
}

export default ViweProjectDetail
