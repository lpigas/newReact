import React, { useState } from 'react';

function Inner() {
    const [value, setValue] = useState('Tekst in input')
    const addvalue = () =>{
        return document.querySelector(`.${value}`).innerHTML += `<h1>${value} а возрвст 
        ${document.querySelector('.count').innerHTML}</h1>`       
      }
  return (
        <div>
          <h1>{value}</h1>
          <input 
          type='text' 
          placeholder={value}
          onChange={event => setValue(event.target.value) }
          ></input>
          <button onClick={addvalue}> Enter</button>
          <div className={value}></div>
      </div>
  )
}

export default Inner