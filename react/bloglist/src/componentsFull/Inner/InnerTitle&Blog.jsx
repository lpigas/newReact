import React from 'react';

export default function InnerTitleBlog({placeholder, onChange, value, style}) {

  return (
    <input style={style} onChange={onChange} placeholder={placeholder} value={value}/> 
  )
}
