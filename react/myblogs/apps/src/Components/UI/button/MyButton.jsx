import React from 'react'

const styles = {
    padding: '5px 20px',
    color: 'black',
    fontSize: '14px',
    backgroundColor: 'transparent',
    border: '2px solid green',
    cursor: 'pointer',
    borderRadius: '10px',
    margin:'2px',
    minWidth: '100px',
}

export default function MyButton({children,...props}) {
  const newStyle = (props.style) ? {...styles, ...props.style} : styles
  return (
    <button {...props} style={newStyle}>
        {children}
    </button>
  )
}
