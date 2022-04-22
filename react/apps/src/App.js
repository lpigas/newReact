import React, { useState } from 'react';
import './styles/App.css'
import PostFprm from './Components/PostFprm';
import Postlist from './Components/Postlist';
import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/modal/MyModal';
import MyButton from './Components/UI/button/MyButton';
import { usePosts } from './Components/Hooks/usePost';

function App () {
  const [posts, setPosts] = useState([])
  const [filter,setFilter] = useState({sort: '', find: ''})
  const [modal, setModal] = useState(false)
  const findPost = usePosts(posts, filter.sort, filter.find)
  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fechPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    setPosts([...posts,...data])
  }
  
  const removePost = (post) =>{
    setPosts(posts.filter(p=> p.id !== post.id))
  }

    return (
      <div className='App'>
        <hr style={{margin:"15px 0px", }}></hr>
        <MyButton 
        style={{marginTop: '15px'}}
        onClick={() => setModal(true)}
        >
          Add new POST
        </MyButton>
        <MyButton onClick={fechPosts}>
          get data
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostFprm create={createPost} 
            value={new Date().getMilliseconds()} />
        </MyModal>
        <hr style={{margin:"15px 0px", }}></hr>
        <PostFilter 
          filter={filter}
          setFilter={setFilter}
        />


        {findPost.length === 0
          ? <h1 className='noAnyTodos'>No any todos</h1>
          :<Postlist remove={removePost} value={findPost} titels='To Do List'/>
        }
        
      </div>
    );
  
}

export default App;
