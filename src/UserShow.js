import React from 'react'

import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
    user:{},  //{id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: {…}, …}
     posts :[]   
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then((response)=>{
            const user = response.data
            this.setState({user})
        })
        axios.get('https://jsonplaceholder.typicode.com/posts?userId='+id)
        .then((response1)=>{
            const posts = response1.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    render(){
        //console.log(this.props)
        return(
            <div>
    <h1>USER NAME:{this.state.user.name}</h1>
    <h2>POSTS WRITTEN BY USER </h2>
    <ul>{
        this.state.posts.map(post=>{
        return <li key ={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
        })
    }</ul>

            </div>
        )
    }
}

export default UserShow