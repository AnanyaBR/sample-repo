import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostShow extends React.Component{
constructor(){
    super()
    this.state ={
        post :{}, //{userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"}
    user:{},
    comments:[]
    }
}



componentDidMount(){
    const id = this.props.match.params.id
axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
.then((response)=>{
    const post = response.data
    this.setState({post})
})
.catch((err)=>{
    console.log(err)
})

setInterval(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/'+this.state.post.userId)
.then((response1)=>{
    const user = response1.data
    this.setState({user})
})
    
}, 2000);

axios.get ('https://jsonplaceholder.typicode.com/comments?postId='+id)
.then((response2)=>{

    //console.log(response2.data)
    const comments = response2.data
    this.setState({comments})
})



}
    render(){
       // console.log(this.props, this.state.post.title)
        return(
            <div>
    <h1>USER NAME:{this.state.user.name}</h1>
        <h1>TITLE:<b>{this.state.post.title} </b></h1>
        <h2>Body:<br/></h2>
        <p><b>{this.state.post.body}</b></p>
    <hr/>
    <h1>COMMENTS</h1>
    <ul>
        {
            this.state.comments.map(comment=>{
                return <li key={comment.id}>{comment.body}</li>
            })
        }
    </ul>
    <hr/>
    <p><Link to={`/users/${this.state.user.id}`}>More posts of author: {this.state.user.name}</Link></p>
            </div>
        )
    }
}

export default PostShow