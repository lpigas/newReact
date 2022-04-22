import React from 'react'
import Select from './UI/Input/Select';
import MyInput from './UI/Input/MyInput';

export default function ({filter, setFilter}) {

  return (
    <div>
        <MyInput 
          value={filter.find}
          style={{width:"30%", marginBottom:'15px'}}
          placeholder='Found...'
          onChange={e => setFilter({...filter, find:e.target.value})}
        />
        <Select 
          defaultOptions='Sort by'
          options={[{name:'Sort by name', value:'title'},
          {name:'Sort by Descriptions', value:'body'},
          // {name:'Sort by Id', value:'id'},
        ]}
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
        />
    </div>
  )
}
