import React from 'react'

export default function Select({options, defaultOptions, value, onChange}) {

  return (
    <div>
        <select 
            value={value}
            onChange={e => onChange(e.target.value)}>
      <option value='' disabled>{defaultOptions}</option>
      {options.map((item) => 
      <option key={item.value} value={item.value}>{item.name}</option>)}
    </select>
  </div>
  )
}
