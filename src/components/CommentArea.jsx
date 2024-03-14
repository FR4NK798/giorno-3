import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import CommentList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComment = () => {
    const idBook = this.props.book.asin;
    //   console.log(idBook);

    const urlEndPoint = "https://striveschool-api.herokuapp.com/api/comments/";
    const url = urlEndPoint + idBook;
    const token =
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWQzNjRjNTllYzAwMTk5MGQ2ZmQiLCJpYXQiOjE3MTA0MjQ1ODksImV4cCI6MTcxMTYzNDE4OX0.cZ9PWynLzuIvFvbb4YoMQ8pgyI-BgIyd4H6BceSewno";
    fetch(url, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // questa è l'estrazione del JSON dalla Response, ovvero il nostro array di prenotazioni
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((comment) => {
        console.log("comment", comment);
        this.setState({
          comments: comment,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    console.log("ComponentDidMount");

    this.fetchComment();
  }

  render() {
    return (
      <>
        <CommentList book={this.state}></CommentList>
        {console.log("this.state", this.state)}
      </>
      //   <ListGroup>
      //     {this.state.comments.map((comment) => {
      //       return <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>;
      //     })}
      //   </ListGroup>
    );
  }
}

export default CommentArea;
