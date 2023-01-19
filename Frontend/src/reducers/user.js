const userreducer = (state=[],action)=>{
    switch (action.type) {
        case "FETCH_USER":
            return  action.payload
        case "UPDATE_CURRENT_DATA":
            return state.map((state)=>(
                state._id === action.payload._id?
                action.payload:
                state
            ))
        default:
            return state;
    }
}

export default userreducer;