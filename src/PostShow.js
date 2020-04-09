import React from 'react'
// import axios from 'axios'
//import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { startGetUsers } from './actions/usersAction'
import {startGetPosts }  from './actions/postsAction'

class PostShow extends React.Component{
   componentDidMount(){
       this.props.dispatch(startGetUsers())
       this.props.dispatch(startGetPosts())
   } 
   

    

render(){
       console.log(' find post useId' , this.props.post )
      
        return(
             <div>
     
     {this.props.post   ? (
         <div>
<h1>USER NAME:{this.props.user.name}</h1>  
     <h1>find USERID {this.props.post.userId}</h1>
<h1>{this.props.post.userId}</h1>
<h1>TITLE:<b>{this.props.post.title} </b></h1>
        <h2>Body:<br/></h2>
        <p><b>{this.props.post.body}</b></p>
    <hr/>
    <h1>COMMENTS</h1>
    {/* 
    <ul>
        {
            this.state.comments.map(comment=>{
                return <li key={comment.id}>{comment.body}</li>
            })
        }
    </ul> */}
    <hr/>
    {/* <p><Link to={`/users/${this.props.user.id}`}>More posts of author: {this.props.user.name}</Link></p> */} 

         </div>
     ) : (
<p>Loading ...</p>
     )}
        
            </div>
        )
    }
}

const mapStateToprops = (state, props)=>{
    const userPost = 
    state.posts.find(post=> post.id == props.match.params.id)
    console.log('map method', userPost)
        return{
            post: userPost,
            user:state.users.find(user=>user.id == userPost.userId)
        }
    }

// const mapStateToprops = (state, props)=>{
    
//     return{
       
//         post:state.posts.find(post=> post.id == props.match.params.id),
        
    
//     user:state.users.find(user=>user.id == abc.userId)
//     }
// }

export default connect(mapStateToprops)(PostShow)

// constructor(){
//     super()
//     this.state ={
//         post :{}, //{userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"}
//     user:{},
//     comments:[]
//     }
// }

// componentDidMount(){
//     const id = this.props.match.params.id
// axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
// .then((response)=>{
//     const post = response.data
//     this.setState({post},()=>{
//         axios.get('https://jsonplaceholder.typicode.com/users/'+this.state.post.userId)
//         .then((response1)=>{
//             const user = response1.data
//             this.setState({user})
//         })
//     })
// })


// .catch((err)=>{
//     console.log(err)
// })

// // setInterval(() => {
// //     axios.get('https://jsonplaceholder.typicode.com/users/'+this.state.post.userId)
// // .then((response1)=>{
// //     const user = response1.data
// //     this.setState({user})
// // })
    
// // }, 2000);

// axios.get ('https://jsonplaceholder.typicode.com/comments?postId='+id)
// .then((response2)=>{

//     //console.log(response2.data)
//     const comments = response2.data
//     this.setState({comments})
// })



// }