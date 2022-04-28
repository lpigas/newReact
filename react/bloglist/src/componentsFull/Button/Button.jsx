import React from 'react'
const style ={
    minWidth: '120px',
    padding: '5px 10px',
    margin: '10px 15px',
    backgroundColor: 'aqua',
    borderRadius: '5px',
}

export default function Button({onClick, value, disabled}) {
  console.log(disabled)
  return (
    <button style={style} onClick={onClick} >
        {value}
    </button>
  )
}
