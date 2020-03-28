

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
                posts: action.payload  //action.payload = the res.data from our action getPosts() (axios.get call)
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload) //filter out the existing posts (remember action.payload is the _id of the post we want to delete)
            }
        case 'ADD_FAV':
            return {
                ...state,
                favorites: [ ...state.favorites, action.payload] // spread in / add the id of the newly like post.
            }
        case 'REMOVE_FAV':
            return {
                ...state,
                favorites: state.favorites.filter(fav => fav !== action.payload)
            }
        default: 
        return state
    }
}