import { Component } from "react";
import { Button, Card } from "react-bootstrap";

export class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
        <> 
    
     <Card className= "m-4 text-center" style={{ height:"30rem", width: '18rem' }} >
       <div style={{ height: '65%' }}>
        <Card.Img className="h-100 "  variant="top" src={this.props.img}/></div>
      <Card.Body >
        <Card.Title className="text-truncate" >{this.props.title} </Card.Title>
        <Card.Text>
        <h4>{this.props.price}0€</h4>
        </Card.Text>
        <Button className=" bottom-0 " variant="primary ">buy</Button>
      </Card.Body>
    </Card>
    
    </>
    );
  }
}


