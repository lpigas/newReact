import React from 'react'

const styles = {
    padding: '5px 20px',
    color: 'blue',
    fontSize: '14px',
    backgroundColor: 'transparent',
    border: '2px solid green',
    cursor: 'pointer',
}

export default function MyButton({children,...props}) {

  return (
    <button {...props} style={styles}>
        {children}
    </button>
  )
}
