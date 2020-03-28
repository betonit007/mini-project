

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
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload) //filter out the existing posts (remember action.payload is the _id of the post we want to delete)
            }
        default: 
        return state
    }
}