import React, { useState, useContext } from "react";
import postContext from '../../context/postContext'

const CreatePostForm = () => {

  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')
  const [ author, setAuthor ] = useState('')

  const { addPost } = useContext(postContext) //destructuring and bringing in addPost function. 

  const handleSubmit = e => {
    e.preventDefault();
    addPost({ title, body, author })
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Create a blog post</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input 
          onChange={e=> setTitle(e.target.value)}
          className="form-control mb-5" 
          required placeholder="Title" 
          value={title}
        />
        <textarea
          onChange={e=>setBody(e.target.value)} 
          className="form-control mb-5" 
          required 
          placeholder="Body"
          value={body}
        />
        <input 
          onChange={e=>setAuthor(e.target.value)}
          className="form-control mb-5" 
          placeholder="Screen name"
          value={author}  
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Save Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
