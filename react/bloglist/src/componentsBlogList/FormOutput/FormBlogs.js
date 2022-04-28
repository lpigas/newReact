import React from 'react'
import Button from '../../componentsFull/Button/Button'
const style ={
    dispay:'flex',
    width: '800px',
    backgroundColor: '#1235',
    marginTop: '5px',
    padding: '15px',
    border:'2px solid black'
}
function FormBlogs(props) {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Blogs</h1>
            {props.value.map(item =>
                <div style={style} key={item.id}>
                <div> 
                {item.id}. {item.title}
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {item.body}
                <Button value='Delete' onClick={() => props.removeBlog(item)}/>
                </div>
            </div>
        </div>
        )}
        </div>
  )
}
export default FormBlogs