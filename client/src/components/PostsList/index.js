import React, { useContext, useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import PostContext from '../../context/postContext'  //importing postContext to gain access to posts array in state.

const PostsList = () => {

  const { posts, getPosts } = useContext(PostContext)  // destructuring the posts array

  useEffect(() => { // useEffect hook to get all posts on load 
    getPosts() 
  }, [])

  return (
    <div>
      <h1>All Blog Posts</h1>
      <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {posts.length ? (  // conditional render that will only render if posts array is greater than '0'
        <List>
          {posts.map(post => (          // mapping posts 
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => {}} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any posts yet!</h3>
      )}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </div>
  );
};

export default PostsList;
