import React from 'react'

function Text({fonts,fontWeight,TextSize,  TextChildrem='Home', color,Line_height='100%',
marginTop='0px', margins
}) {
  return (
    <div>
<span style={{
        fontFamily: fonts,
        fontWeight: fontWeight,
        fontSize: TextSize,
         color: color,
        lineHeight:Line_height
        ,marginTop:marginTop,
        
      }}>{TextChildrem}</span>
</div>
  )
}

export default Text
