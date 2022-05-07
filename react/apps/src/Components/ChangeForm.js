import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/Input/MyInput';

export default function ChangeForm({changed, reBody}) {
    const [next, setNext] = useState({body:''})
    const addChange = () =>{
      const newPost ={id: changed.id, title: changed.title, ...next }
      reBody(newPost)
      setNext({body:''})
    }
    if (next){
      
    }
  return (
    <div>
            <strong>{changed.id}.{changed.title}</strong>
            <div>`Post - {changed.body}`</div>
            <div>
            <MyInput 
            placeholder={changed.body}
            value={(next.body)}
            onChange={e => setNext({body: e.target.value})}/>
            </div>
            <div>
            <MyButton  onClick={addChange} type='button'>
            Change Post
          </MyButton>
            </div>
    </div>
  )
}
