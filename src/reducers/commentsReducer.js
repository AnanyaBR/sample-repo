const commentsInitialState = []

const commentsReducer=(state=commentsInitialState, action)=>{
    switch(action.type){
        case 'SET_COMMENT' :{
            return [].concat(action.payload)
        }
        default :{
            return [].concat(state)
        }
    }
}

export default commentsReducer