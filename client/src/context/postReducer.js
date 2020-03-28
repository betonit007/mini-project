

export default(state, action) => {
    switch(action.type) {
        case 'NEW_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload]  //spread in response to existing posts array 
            }
        case 'ALL_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        default: 
        return state
    }
}