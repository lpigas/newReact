import React from 'react'
import classes from './Button.module.css'


export default function MyButton(props) {
  console.log(classes.myBtn)
  return (
    <button className={classes.myBtn} >
        {props.value}
    </button>
  )
}
