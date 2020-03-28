import React, { useReducer } from 'react'
import PostContext from './postContext'
import postReducer from './postReducer'
import axios from 'axios'

const PostState = props => {

  const initialState = {
    posts: [],
    currentPost: '',
    loading: true
  }

  const [state, dispatch] = useReducer(postReducer, initialState)


  const addPost = async formData => {
    
    try {

      //verifying that there is a title and auther before submitting
      const res = await axios.post('/api/posts', formData)
      dispatch({
        type: 'NEW_POST',
        payload: res.data
      })
    } catch (err) {
      console.log(err)
    }
  }

  const getPosts = async () => {
    const res = await axios.get('/api/posts')
    dispatch({
      type: 'ALL_POSTS',
      payload: res.data
    })
  }

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        currentPost: state.currentPost,
        addPost,
        getPosts
      }}
    >
      {props.children}
    </PostContext.Provider>
  )

}

export default PostState