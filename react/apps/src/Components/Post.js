import React from 'react'
import MyButton from './UI/button/MyButton'



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
            <div>
            <MyButton onClick={() => props.changePost(props.value)}> Change</MyButton>
            </div>
            <div>
            <MyButton onClick={() => props.remove(props.value)}> Delete</MyButton>
            </div>
            
            
          </div>
        </div>
  )
}
