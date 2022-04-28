import { useMemo } from "react"
export const usePosts = (blogPost,find) =>{
    const sortedPost = blogPost
    const findPost = useMemo(()=>{
        return blogPost.filter(item => item.title.toLowerCase().includes(find.toLowerCase()))
      },[find, sortedPost])

      return findPost;
}