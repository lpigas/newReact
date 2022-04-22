import React from 'react'
import Post from './Post';
// import Select from './UI/Input/Select';



export default function Postlist({value, titels, remove}) {

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
          {titels}
          </h1>
        {value.map(item => 
        <Post remove={remove} value={item} key={item.id}/>
        )}
    </div>
  )
}
