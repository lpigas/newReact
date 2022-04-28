import React from 'react'

import InnerTitleBlog from '../../componentsFull/Inner/InnerTitle&Blog'
const styles = {
    width: '200px',
    padding: '5px 5px',
    margin: '10px 15px',
    backgroundColor: '#1235',
  }


export default function SortBlogs({setBlogPost, blogPost, setFind}) {
     
    // console.log(usePosts(blogPost,find))
  return (
    <div>
        <InnerTitleBlog style={styles} placeholder='Find ... ' onChange={ e => 
            setFind(e.target.value)
            }/>
    </div>
  )
}
