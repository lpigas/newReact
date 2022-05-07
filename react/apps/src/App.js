import React, { useEffect, useState } from 'react';
import PostService from './Components/Api/PostService';
import './styles/App.css'
import PostFprm from './Components/PostFprm';
import Postlist from './Components/Postlist';
import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/modal/MyModal';
import MyButton from './Components/UI/button/MyButton';
import { usePosts } from './Components/Hooks/usePost';
import LoaderSpiner from './Components/UI/Loader/LoaderSpiner';
import { UseFeaching } from './Components/Hooks/UseFeaching';
import NextPriv from './Components/NextPriv';
import ChangeForm from './Components/ChangeForm';

function App () {
  const [posts, setPosts] = useState([])
  const test = [{id: 112001, title:'Добавить модалку под изменение поста', body:'вывести'},
               {id: 112003, title:'сверху кол во постов на странице выбор ', body:'через селект,'}]
  const centralUrl ='https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1';
  const siteUrl = centralUrl.substring(0, centralUrl.indexOf('?'))
  const [totalPosts,setTotalPosts] = useState([])
  const [filter,setFilter] = useState({sort: '', find: ''})
  const [modalCreate, setModalCreate] = useState(false)
  const [modalChange, setModalChange] = useState(false)
  const findPost = usePosts(totalPosts, filter.sort, filter.find)
  const [totalPostsinPage, setTotalPostsinPage] = useState(+centralUrl.substring(centralUrl.indexOf('limit=')+6, 
                                                          centralUrl.indexOf('&')))
  const [iter, setIter] = useState(1);
  const [changed, setChanged] = useState([])
  const [blogsInPage, setBlogsInPage] = useState(+totalPostsinPage) 
  const totallPagesNumbers = Math.ceil(findPost.length / blogsInPage)
  
  const [allPosts, loading, error] = UseFeaching(async() =>{
    const datas = await PostService(siteUrl);
    (datas) ? setTotalPosts([...test,...datas]) : setTotalPosts([...test])
  })
  useEffect(()=>{
    allPosts()
  },[])
  
  useEffect(()=>{
      if (iter !== blogsInPage + 1){
          setPosts(findPost.slice(((iter-1 ) * blogsInPage), (blogsInPage * iter)))
      } else{
          setPosts(findPost.slice((iter-1) * blogsInPage, findPost.length - 1))
      }
      },[filter.find, filter.sort, totalPosts, iter, blogsInPage])
      
 useEffect(()=>{
  setBlogsInPage(totalPostsinPage)
 }, [totalPostsinPage])

  const createPost = (newPost) =>{
    setTotalPosts([ newPost, ...totalPosts])
    setModalCreate(false)

  }
  
  const newIter = iter =>{
    setIter(iter)
}
  
  const removePost = post =>{
    setTotalPosts(totalPosts.filter(p=> p.id !== post.id))
  }
  const resetPosts = () =>{
    allPosts()
    setIter(1)
    setFilter({sort: '', find: ''})
  }
  const changePost = postchange =>{
    setChanged(postchange)
    setModalChange(true)
  }
  const reBody = newBody=>{
    setTotalPosts(totalPosts.map(i => i === changed ? newBody : i))
    setModalChange(false)
  }
    return (
      <div className='App'>
        <hr style={{margin:"15px 0px", }}></hr>
        <div className='topButton' >
          <MyButton 
        style={{margin: '15px'}}
        onClick={() => setModalCreate(true)}
        >
          Add new Post
        </MyButton>
        <MyButton onClick={resetPosts}>
          Reset
        </MyButton>
        </div>
        <MyModal visible={modalCreate} setVisible={setModalCreate}>
          <PostFprm create={createPost} 
            value={new Date().getMilliseconds() * 100} />
        </MyModal>
        <MyModal visible={modalChange} setVisible={setModalChange} >
          <ChangeForm changed={changed} reBody={reBody}/>
        </MyModal>
        <hr style={{margin:"15px 0px", }}></hr>
          <PostFilter 
              filter={filter}
              setFilter={setFilter}
              setTotalPostsinPage={setTotalPostsinPage}
              totalPostsinPage={totalPostsinPage}
            />
        {error &&
         <h1 style={{display:'flex', justifyContent: 'center'}}>error{error}</h1>}
        {loading 
          ? <LoaderSpiner style={{textAlign: 'center'}}/>
          : findPost.length === 0
              ? <h1 className='noAnyTodos'>No any Posts</h1>
              :<div><Postlist remove={removePost} value={posts} titels='To Do List' changePost={changePost}/>
                                    <h1 style={{
                                    display:'flex', 
                                    justifyContent: 'center'}}>
                                  {iter} page from {totallPagesNumbers}</h1>
               </div>
        }
        <NextPriv onClick={newIter} iter={iter} setIter={setIter} totallPagesNumbers={totallPagesNumbers}/>
        
      </div>
    );
}

export default App;
