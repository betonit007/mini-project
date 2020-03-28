import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import postContext from '../context/postContext'


function Detail(props) {
  console.log(props.match.params.id)

  const { posts, addToFavorites, favorites, removeFromFavs } = useContext(postContext)
  console.log(posts)
  const { title, body, author, _id } = posts.find(post => post._id === props.match.params.id)

  console.log(favorites.indexOf(_id))
  return (
    <>{/* Replace `true` with the state of your application */}
    {true ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{`${title} by ${author}`}</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content:</h1>
              <p>{body}</p>
            </article>
          </Col>
          {/* Replace `false` to check if the current post is in the favorites list */}
          { favorites.indexOf(_id) !== -1 ? ( 
            <button onClick={()=>removeFromFavs(_id)} className="btn btn-danger">Remove from Favorites!</button>
          ) : (
            <button onClick={(()=>addToFavorites(_id))} className="btn">❤️ Add to Favorites</button>
          )}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
}

export default Detail;
