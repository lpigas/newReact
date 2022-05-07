import { useMemo } from "react"

export const useSortedPost = (posts, sort) => {
    
    const sortedPost = useMemo(() =>{
        console.log('Work');
        if (sort){
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) 
        } 
          return posts;
      }, [sort, posts]);
    
      return sortedPost;
}

export const usePosts = (posts, sort, find) =>{
    const sortedPost = useSortedPost(posts, sort)
    const findPost = useMemo(()=>{
        return sortedPost.filter(item => item.title.toLowerCase().includes(find.toLowerCase()))
      },[find, sortedPost])

      return findPost;
}