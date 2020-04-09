import React from 'react'
import {connect} from 'react-redux'
//import {startGetPosts} from './actions/postsAction'


// import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component{

    
    render(){
        //console.log(this.props.user)
        return(
            <div>
                {
                    this.props.user ? 
                    ( <div>
                            <h1>USER NAME:{this.props.user.name}</h1>
                            <h2>POSTS WRITTEN BY USER </h2>
                            <ul>{
                                this.props.post.map(pos=>{
                      return <li key ={pos.id}><Link to={`/posts/${pos.id}`}>{pos.title}</Link></li>
                      })
                       }</ul> 
                       </div>)
                         : 
                    
                    ( <p>Loading...</p>)
                }
    

            </div>
        )
    }
}

const mapStateToProps = (state, props)=>{
    return{
        user:state.users.find(user => user.id == props.match.params.id),
        post:state.posts.filter(post=> post.userId == props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserShow)

 // constructor(){
    //     super()
    //     this.state={
    // user:{},  //{id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: {…}, …}
    //  posts :[]   
    //     }
    // }

    // componentDidMount(){
    //     const id = this.props.match.params.id
    //     axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    //     .then((response)=>{
    //         const user = response.data
    //         this.setState({user})
    //     })
    //     axios.get('https://jsonplaceholder.typicode.com/posts?userId='+id)
    //     .then((response1)=>{
    //         const posts = response1.data
    //         this.setState({posts})
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

     