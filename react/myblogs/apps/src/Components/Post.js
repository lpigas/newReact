import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyModal from './UI/modal/MyModal'

export default function Post(props) {
  const [photoVisibilite, setPhotoVisibilite] = useState(false)
  return (
    <div className={props.className} id={props.value.body}>
      <MyModal visible={photoVisibilite} setVisible={setPhotoVisibilite}>
            <img 
              onClick={()=>console.log('asdasd')}
              alt={props.value.alt}
              src={props.value.url} 
              style={{width:'450px', height: '450px',}}></img>
        </MyModal>
          <div className='post__content'
          onClick={()=> props.className === 'post'&& props.openBlog(props.value)}>
            <strong>{props.value.id}.{props.className === 'post' && props.value.title.length > 40
                                    ? `${props.value.title.substring(0,40)}...`
                                    : props.value.title}</strong>
            <div>
              {(props.className === 'post' && props.value.body.length > 40)
                                    ? `${props.value.body.substring(0,40)}...`
                                    : props.value.body}
            </div>
          </div>
          <div className='photo' style={{margin:'5px', width:'50px', textAlign: 'right'}}>
            <img 
              onClick={()=>setPhotoVisibilite(true)}
              alt={props.value.alt}
              src={props.value.url} 
              style={{width:'50px', height: '50px',}}></img>
          </div>
          <div className='post__bts'>
            <div>
            <MyButton onClick={() => props.changePost(props.value)}> Change</MyButton>
            </div>
            <div>
            <MyButton onClick={() => props.remove(props.value)}> Delete</MyButton>
            </div>
          </div>
        </div>
  )
}
