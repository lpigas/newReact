import React from 'react'
import Select from './UI/Input/Select';
import MyInput from './UI/Input/MyInput';

export default function ({filter, setFilter, setTotalPostsinPage, totalPostsinPage}) {
  const newOptions =[{name:'10', value:'10'},
                     {name:'20', value:'20'},
                     {name:'50', value:'50'},
                     {name:'100', value:'100'},
]
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
        <div style={{display: 'flex', justifyContent:'end'}}>Posts from page</div>
        <div style={{display: 'flex', justifyContent:'end'}}>
          <Select 
          style={{padding: '5px 20px',
            backgroundColor: 'transparent',
            border:' 2px solid green', 
            borderRadius: '10px', 
            margin: '2px',
            }}
          options={newOptions}
          value={totalPostsinPage}
          onChange={page => setTotalPostsinPage(+page)}
          styleforDef={{display:'none'}}
        />
        </div>
    </div>
  )
}
