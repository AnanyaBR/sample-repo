import React from 'react'
import {connect} from 'react-redux'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import {startGetPosts} from './actions/postsAction'

class Posts extends React.Component{
    componentDidMount(){
        if(this.props.posts.length == 0){
            this.props.dispatch(startGetPosts())
        }
    }
   

    render(){
        return(
            <div>
                <h1>Total Posts:{this.props.posts.length}</h1>
                <ul>{
                    this.props.posts.map(post=>{
                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })
                 }</ul>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Posts)

 // constructor(){
    //     super()
    //     this.state={
    //         posts :[]
    //     }
    // }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((response)=>{
    //         const posts = response.data
    //         this.setState({posts})
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }