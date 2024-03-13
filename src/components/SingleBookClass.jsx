import { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBookClass extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        style={{ width: "18rem" }}
        onClick={() => {
          this.setState({ selected: true });
        }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title} </Card.Title>
          {/* <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text> */}
          {/* Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBookClass;
