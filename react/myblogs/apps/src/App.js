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
  const centralUrl ='https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1';
  const photoUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=100'
  const siteUrl = centralUrl.substring(0, centralUrl.indexOf('?'))
  const [totalPosts,setTotalPosts] = useState([])
  const [filter,setFilter] = useState({sort: '', find: ''})
  const [modalCreate, setModalCreate] = useState(false)
  const [modalChange, setModalChange] = useState(false)
  const findPost = usePosts(totalPosts, filter.sort, filter.find)
  const urlDataPage = +centralUrl.substring(centralUrl.indexOf('limit=')+6,centralUrl.indexOf('&'))
  const [totalPostsinPage, setTotalPostsinPage] = useState(urlDataPage)
  const [iter, setIter] = useState(1);
  const [bloginModal, setBloginModal] = useState([])
  const [changed, setChanged] = useState([])
  const [blogsInPage, setBlogsInPage] = useState(+totalPostsinPage) 
  const totallPagesNumbers = Math.ceil(findPost.length / blogsInPage)
  const [modalOpenBlog, setModalOpenBlog] = useState(false)
  const [photoData, setPhotoData] = useState([])
  const [x, setX] = useState([])
  const [allPhoto] = UseFeaching(async() =>{
    const data = await PostService(photoUrl);
    setPhotoData([...data])
  })
  const [allPosts, loading, error] = UseFeaching(async() =>{
    const datas = await PostService(siteUrl);
    setTotalPosts([...datas])
  })
  
  useEffect(()=>{
    allPosts()
    allPhoto()
    
  },[])
  

  useEffect(()=>{
    if (totalPosts.length>0 && photoData.length > 0){
      setX(totalPosts.map((i, index) => x.push({...i, alt:photoData[index].title, url:photoData[index].url})))
      }
      setTotalPosts(x)
  }, [photoData])



  useEffect(()=>{
      if (iter !== blogsInPage + 1){
          setPosts(findPost.slice(((iter-1 ) * blogsInPage), (blogsInPage * iter)))
      } else{
          setPosts(findPost.slice((iter-1) * blogsInPage, findPost.length - 1))
      }

      },[filter.find, filter.sort,totalPosts, iter, blogsInPage])
      
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
    setModalOpenBlog(false)

  }
  const resetPosts = () =>{
    setTotalPostsinPage((urlDataPage))
    allPosts()
    setIter(1)
    setFilter({sort: '', find: ''})
  }
  const changePost = postchange =>{
    setModalOpenBlog(false)
    setChanged(postchange)
    setModalChange(true)
  }
  const reBody = newBody=>{
    setModalOpenBlog(false)
    setTotalPosts(totalPosts.map(i => i === changed ? newBody : i))
    setModalChange(false)
  }
  const openBlog = blog =>{
      setBloginModal([blog])
      setModalOpenBlog(true)  
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
        <MyButton style={{margin: '15px'}} onClick={resetPosts}>
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
        <MyModal visible={modalOpenBlog} setVisible={setModalOpenBlog}>
          <div style={{display:'flex', justifyContent:'end'}}>
              <MyButton onClick={()=>setModalOpenBlog(false)}>X</MyButton>
            </div>
          <Postlist value={bloginModal} remove={removePost} changePost={changePost}
                    className='post__Blog'/>
                                    
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
              :<div><Postlist remove={removePost} value={posts} titels='To Do List' 
                              changePost={changePost} openBlog={openBlog}  className='post'/>
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
