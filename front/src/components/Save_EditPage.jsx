import React from 'react'
import SideBer from '../AllSmallComponent/SideBer'
import ShowProjectDetail from '../AllSmallComponent/ShowProjectDetail'
import Save_Edited from '../AllSmallComponent/Save_Edited'

function Save_EditPage() {
  return (
    <div className='flex    '>
    {/* sideBar */}
    <div className=' '>
<SideBer/>
    </div>
    <div className='m-[2vw] md:w-[76vw]'>
<Save_Edited/>

</div>
  </div>
  )
}

export default Save_EditPage
