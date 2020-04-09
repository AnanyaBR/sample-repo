const usersIntialState = []

const usersReducer =(state=usersIntialState, action)=>{
    switch(action.type){

        case 'SET_USERS' :{
            return [].concat(action.payload)
        }
        default :{
            return [].concat(state)
        }
    }
}

export default usersReducer