import { useMemo } from "react"

export const useSort = (findBlogs, selectsort) =>{
    const sorts = findBlogs
    console.log(selectsort)
    const sortedPost = useMemo(() =>{
        if (selectsort){
            if(selectsort[0] !== 'id'){
                return [...sorts].sort((a, b) =>  a[selectsort].localeCompare(b[selectsort])) 
            } else if (selectsort[1] !== 'u'){
                return [...sorts].sort((a, b) => b.id - a.id);
            } else {
                return [...sorts].sort((a, b) => a.id - b.id);
            }
        } 
          return findBlogs;
        }, [selectsort, findBlogs]);
      return sortedPost;
}

