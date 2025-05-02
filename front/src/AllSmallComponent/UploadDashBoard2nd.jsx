import React, { useState } from 'react'
import DashNav from './DashNav'
import Text from './Text'
import FeatureBox from './FeatureBox'
import Upload from './Upload'
import Table_file from './Table_file'

function UploadDashBoard2nd({IDS}) {
  let [showTable,setShaowTable]=useState(true);
  let [ID,setIds]=useState(IDS);
  
   return (
    <div className='flex flex-col items-start'>
        <DashNav/>
        <div className='my-[2rem]'>
        <Text fonts='Roboto' fontWeight='600' Line_height='100%' TextSize='1.7rem' letterSpaceing= '10.26px' TextChildrem='Add Podcast' color='black'/>     
      </div>
      {/* feature\s */}
      <div className='flex items-center justify-between flex-wrap '> 
      <div  onClick={()=>setShaowTable(false)} className='cursor-pointer'>
      <FeatureBox imgs='/image11.png' names={'RSS Feed'}/>
      </div>
      <div className='mx-[2vw] cursor-pointer' onClick={()=>setShaowTable(true)}> 
      <FeatureBox imgs='/image12.png' names='Youtube '/>
      </div>
      <div  onClick={()=>setShaowTable(true)} className='cursor-pointer'>
      <FeatureBox imgs='/ic_round-upload.png' names='Upload Files'/>
      </div>
      </div>
      {showTable?<Upload onclose={()=>setShaowTable(false)} project_id={ID}/>:
      <Table_file project_id={ID} /> }
    </div>
  )
}

export default UploadDashBoard2nd
