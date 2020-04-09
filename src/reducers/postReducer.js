const postsInitialState = []

const postsReducer =(state=postsInitialState, action)=>{
    switch(action.type){
        case 'SET_POST' : {
            return [].concat(action.payload)
        }
        default: {
            return []. concat(state)
        }
    }
}

export default postsReducer