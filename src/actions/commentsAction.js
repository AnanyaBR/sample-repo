import axios from 'axios'

//sync

export const setComments=(comments)=>{
    return{type: 'SET_COMMENT', payload: comments}
}

//async

export const startGetComments = ()=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            const comments = response.data
            dispatch(setComments(comments))
        })
        .catch((err)=>{
            console.log(err)
        })

    }
}