
async function PostService(siteUrl) {

    try{
            const response = await fetch(siteUrl)
            const data = await response.json();  
            return data
    } catch (error){

            console.error('внешний блок catch', 'error')
    }
    
    
    
}

export default PostService