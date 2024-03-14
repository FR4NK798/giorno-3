// import SingleBook from "./SingleBook";
import SingleBookClass from "./SingleBookClass";
import CommentArea from "./CommentArea";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BookList = function (prop) {
  return (
    <Row>
      {prop.books.map((book, i) => {
        return (
          <Col key={i}>
            <SingleBookClass book={book}></SingleBookClass>
          </Col>
        );
      })}
    </Row>
  );
};

export default BookList;
