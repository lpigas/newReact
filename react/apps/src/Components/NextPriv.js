import React from 'react'
import MyButton from './UI/button/MyButton';
import Select from './UI/Input/Select';
import { useArrayForLength } from './Hooks/useArrayForLength';

export default function NextPriv({onClick, iter, setIter, totallPagesNumbers}) {
  const newOptions = useArrayForLength(totallPagesNumbers)
  const SelectPage = page=>{
    setIter(+page)
  }
    const nextIter = () =>{
        setIter(iter + 1)
      }
      const PreviousIter = () =>{
        setIter(iter - 1)
      }
  return (
    <div style={{margin:'5px', 
    padding:'10px', 
    display:'flex', 
    justifyContent:'end',
    textContent:'end',
    flexDirection:'column'}}>
      <div style={{display: 'flex', width: '100%', justifyContent:'end'}}>
      <Select 
          style={{padding: '5px 20px',
            backgroundColor: 'transparent',
            border:' 2px solid green', 
            borderRadius: '10px', 
            margin: '2px',
            }}
          options={newOptions}
          defaultOptions=''
          value={iter}
          onChange={page => SelectPage(page)}
          styleforDef={{display:'none'}}
        />
      </div>
      <div style={{display: 'flex', width: '100%', justifyContent:'end'}}>  
        <MyButton onClick={PreviousIter} disabled={iter===1}>
           Previous
        </MyButton>
       <MyButton onClick={nextIter} disabled={iter===totallPagesNumbers}>
           Next
        </MyButton>

      </div>
      
        
    </div>
  )
}
