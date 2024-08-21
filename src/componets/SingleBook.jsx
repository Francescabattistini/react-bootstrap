import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
export class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
        <> 
    
     <Card className={this.state.selected ? "border-danger" : ""}style={{ height:"30rem", width: '18rem' }} 
  
     onClick={() => this.setState(prevState => ({ selected: !prevState.selected }))}
     >
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


