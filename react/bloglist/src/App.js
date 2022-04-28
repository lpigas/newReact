import React, { useState } from 'react';
import FormBlogs from './componentsBlogList/FormOutput/FormBlogs';
import InnerNewBlog from './componentsBlogList/InnerNewBlog/InnerNewBlog';
import SortBlogs from './componentsBlogList/Sort/SortBlogs';
import { usePosts } from './Huck/useFinsd'
import { useSort } from './Huck/useSort';
import Select from './componentsFull/Select/Select';
import Button from './componentsFull/Button/Button';


function App() {
  const [blogPost, setBlogPost] = useState([]);
  const [find, setFind] = useState('');
  const findBlogs = usePosts(blogPost,find);
  const [addInet, useAddInet] = useState(false)
  const [selectsort, setSelectsort] = useState('')
  const select = [{name: 'Sort by title', value: 'title'}, 
                  {name:'Sort by blog', value: 'body'},
                  {name:'Sort by Id Up', value: 'id u'},
                  {name:'Sort by Id Down', value: 'id d'},
                ];
                async function fechPosts() {
                  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                  const data = await response.json();
                  setBlogPost([...blogPost,...data])
                  useAddInet(true)
  }


  const removeBlog = x =>{
      setBlogPost (blogPost.filter(valuess => valuess !== x ));
  }
  const onChangeSelect = sort =>{
    setSelectsort(sort.split(' '))
  }
  const sorted = useSort(findBlogs, selectsort)

  
    return (
      <div className="App">
        <div className='new__blog'>
        <div className={'addInet'}>
        < Button value='Add inet blogs' onClick={fechPosts} disabled={addInet}/>
        </div>
        
        <InnerNewBlog blogPost={blogPost} setBlogPost={setBlogPost} />
        </div >
        <div className='NewPost'>
          <SortBlogs blogPost={blogPost} setBlogPost={setBlogPost} setFind={setFind}/>
          <div>
        <div>
          <Select select={select} 
          defaultOptions='Sort by'
          onChange={onChangeSelect}
          />
        </div>
              {(sorted.length === 0) ?
              <h1 style={{textAlign: 'center'}}>No any blogs</h1> :
                <FormBlogs value={sorted} removeBlog={removeBlog}/>
              }
          </div>


        </div>
          
        
      </div>
    );
  }


export default App;
