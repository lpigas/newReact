import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/Input/MyInput';

export default function PostFprm({create, value}) {
    const [post, setPost] = useState({title:'', body:''});

    const addpost = () =>{

        const newPost ={id: value, ...post }
        create(newPost)
        setPost({title:'', body:''})
    
}
  return (
    <form className='form'>
          <MyInput 
            value={post.title}
            onChange={e => setPost({...post, title: e.target.value})} 
            placeholder='Input header post' />
          <MyInput 
            value={post.body}
            placeholder='Input post' 
            onChange={e => setPost({...post, body: e.target.value})}/>
          <MyButton  onClick={addpost} type='button'>
            Add new Post
          </MyButton>
        </form>
  )
}
