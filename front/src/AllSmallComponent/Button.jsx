import React from 'react';

function Button({
  text = 'Click Me',        
  onClick = () => {},
  backgroundColor="#FFFFFF",        
   textColor = ' #022183',     
  fontSize = '1.2rem',         
  padding = '.9rem 3rem',    
  borderRadius = '2vw ', 
  letterSpacing=''  ,
  fontweight='500'
 //   position = 'absolute',   
            
}) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: fontSize,
        padding: padding,
        borderRadius: borderRadius,
        letterSpacing:letterSpacing,
        fontweight:fontweight

      }}
     >
      {text}
    </button>
  );
}

export default Button;
