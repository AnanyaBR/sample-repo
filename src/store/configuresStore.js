import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/userReducer'
import postsReducer from '../reducers/postReducer'
import commentsReducer from '../reducers/commentsReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        users:usersReducer,
        posts:postsReducer,
        comments:commentsReducer

    }),applyMiddleware(thunk))

return store
}

export default configureStore