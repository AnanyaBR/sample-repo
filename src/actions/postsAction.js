import axios from 'axios'

//sync
export const setPost=(posts)=>{
return {type:'SET_POST', payload: posts}
}


//async

export const startGetPosts = ()=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        
        .then((response)=>{
           //console.log(response.data)
            const posts = response.data
            dispatch(setPost(posts))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}