import React from 'react'

export default function MyCheckbox() {
  const styles = {
    padding: '5px 20px',
    marginRight:'15px',
    color: 'blue',
    fontSize: '14px',
    backgroundColor: 'transparent',
    border: '2px solid green',
    cursor: 'pointer',
}
  return (
    <input style={styles} type='checkbox' />
  )
}
