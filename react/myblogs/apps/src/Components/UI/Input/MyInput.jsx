import React from 'react'
const style = {
    margin:'10px 0px',
    pading:'5%',
    height: '40px',
    width: '100%',
    backgroundColor: '#afc',
    border:'2px solid green',
}
 const MyInput = ({...props}) =>{
  return (
    <input style={style} {...props}/>
  )
}
export default MyInput