import React, { useState } from 'react';


export default function counter() {
    const [count, setCount] = useState(0)

    const Incriment = () => {
        setCount(count+1)
      };
      
      
    const Dicriment = () => {
        if (count > 0){
        setCount(count-1)}
          else {
            setCount(0)
          }
      };
  return (
    <div>
            <div>          
            <button onClick={Incriment}>Incriment</button>
            <button onClick={Dicriment}>Dicriment</button>
          </div>

          <h1 className='count'>{count}</h1>
    </div>
  )
}
