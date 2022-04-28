import React from 'react'
import './Select.css'
export default function Select({select, defaultOptions, onChange}) {

  return (
      <div>
          <select className='SelectChangeSort' defaultValue=''
          onChange={e => onChange(e.target.value)}>
        <option value='' disabled >{defaultOptions}</option>
        {select.map(item => 
            <option value={item.value} key={item.value}>{item.name}</option>
        )}
    </select>

      </div>
    
  )
}
