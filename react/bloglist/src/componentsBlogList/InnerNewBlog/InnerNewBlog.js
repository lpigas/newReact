import React, { useState } from 'react'
import InnerTitleBlog from '../../componentsFull/Inner/InnerTitle&Blog';
import Button from '../../componentsFull/Button/Button';
import Modal from '../../componentsFull/modalPage/Modal';
const styles = {
  width: '400px',
  padding: '5px 5px',
  margin: '10px 15px',
  backgroundColor: '#1235',

} 

export default function InnerNewBlog(props) {
    const [newBlog, setNewBlog] = useState({title:'', body:''})
    const [modal, setModal] = useState(false)
    const addNewPost = () =>{
        const randomNum = Math.ceil(Math.random()*100)
        const newPost = {id: new Date().getMilliseconds() * randomNum, ...newBlog}
        props.setBlogPost([...props.blogPost,newPost])
        setNewBlog({title:'', body:''})
        setModal(false)
      }
      const changeModal = () =>{
        setModal(true)
      }
  return (
    <div>
      <Button onClick={changeModal} value={'add new blog modal'}/>
        <Modal visible={modal} setVisible={setModal}>
          
        <InnerTitleBlog 
          style={styles}
          value={newBlog.title}
          placeholder='Name blog' 
          onChange={e => setNewBlog({...newBlog,title:e.target.value})}/>
        <InnerTitleBlog 
          style={styles}
          value={newBlog.body}
          placeholder='Text Blog' 
          onChange={e => setNewBlog({...newBlog,body:e.target.value})}/>
        <div style={{textAlign: 'center'}}>
          <Button value='Add post'onClick={addNewPost}/>
        </div>
          </Modal>
    </div>
  )
}
