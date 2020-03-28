import React, { useReducer } from 'react'
import PostContext from './postContext'
import postReducer from './postReducer'
import axios from 'axios'

const PostState = props => {

  const initialState = {
    posts: [],
    currentPost: '',
    favorites: [],
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

  const deletePost = id => {
    axios.delete(`/api/posts/${id}`)

    dispatch({
      type: 'DELETE_POST',
      payload: id
    })
  }

  const loading = () => {
    dispatch({
      type: 'SET_LOADING'
    })
  }

  const addToFavorites = id => {
    dispatch({
      type: 'ADD_FAV',
      payload: id
    })
  }

  const removeFromFavs = id => {
    dispatch({
      type: 'REMOVE_FAV',
      payload: id
    })
  }

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        currentPost: state.currentPost,
        addPost,
        getPosts,
        deletePost,
        loading,
        favorites: state.favorites,
        addToFavorites,
        removeFromFavs
      }}
    >
      {props.children}
    </PostContext.Provider>
  )

}

export default PostState