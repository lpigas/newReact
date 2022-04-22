import React from 'react'
import MyButton from './UI/button/MyButton'
import MyCheckbox from './UI/Input/MyCheckbox.jsx';


export default function Post(props) {

  return (
    <div className='post' id={props.value.body}>
          <div className='post__content'>
            <strong>{props.value.id}.{props.value.title}</strong>
            <div>
              {props.value.body}
            </div>
          </div>
          <div className='post__bts'>
            <MyCheckbox />
            <MyButton onClick={() => props.remove(props.value)}> Delete</MyButton>
          </div>
        </div>
  )
}
