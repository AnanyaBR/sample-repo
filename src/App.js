import React from 'react'
import Home from './Home'
import Userslist from './Users'
import Posts from './Posts'
import UserShow from './UserShow'
import PostShow from './PostShow'
import {BrowserRouter, Route, Link} from 'react-router-dom'

function App(props){
    return(
    <BrowserRouter>
    <div>
            <h1>Hello React App!!!</h1>
            <Link to='/'>Home</Link>|
            <Link to="/userslist">Users</Link>|
            <Link to='/posts'>Posts</Link>
            
            

            <Route path='/' component={Home} exact={true}/>
            <Route path="/userslist" component={Userslist} exact={true}/>
            <Route path="/posts" component={Posts} exact={true}/>
            <Route path="/users/:id" component={UserShow} />
            <Route path="/posts/:id" component={PostShow}/>
            {/*<Home/>
            <Users/>
            <Posts/> */}

        </div>
        </BrowserRouter>
        
    )
}

export default App