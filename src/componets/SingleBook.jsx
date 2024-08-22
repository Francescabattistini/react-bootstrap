import { Component } from "react";
import { Button, Card } from "react-bootstrap";

export class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
        
        <Card type="button"
        onClick={() => this.setState({ selected: !this.state.selected })}
         
        className={this.state.selected ? "border-danger" : ""}style={{ height:"30rem", width: '18rem', margin:"2rem"}} 
          >
       <div style={{ height: '65%' }}>
        <Card.Img className="h-100 "  variant="top" src={this.props.book.img}/></div>
      <Card.Body >
        <Card.Title className="text-truncate" >{this.props.book.title} </Card.Title>
        <Card.Text>
        <h4>{this.props.book.price}0€</h4>
        </Card.Text>
        <Button className=" bottom-0 " variant="primary ">buy</Button>
      </Card.Body>
    </Card>
    
    
    );
  }
}


