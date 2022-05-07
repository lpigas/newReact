// const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1'
async function Api(iter, url) {
        let newUrl = ''
        if(iter){
                newUrl = url.substring(0, url.length-1) + iter;
        }else {
                newUrl = url;
        }

        try{
                const response = await fetch(newUrl)
                const data = await response.json();  
                return data
        } catch (error){

                console.error('внешний блок catch', 'error')
        }
        
        
        
}

export default Api