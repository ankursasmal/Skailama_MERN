import React from 'react';

function ImageComponent({ src,  width = '16rem', height = '4.1rem',position="" ,Top='',bottom='',right=''}) {
  return (
    <img
      src={src}
      
      style={{
        width: width,
        height: height,
        position:position,
  top:Top,
  bottom:bottom,
  right:right

        
      }}
    />
  );
}

export default ImageComponent;
