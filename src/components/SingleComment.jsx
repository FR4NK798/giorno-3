import ListGroup from "react-bootstrap/ListGroup";

const SingleComment = (props) => {
  return (
    <>
      <ListGroup.Item>{props.comment.comment}</ListGroup.Item>
    </>
  );
};
export default SingleComment;
