import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import books from "../books/fantasy.json"

export function AllTheBooks () {
    return (
        <>
        <div className = "d-flex flex-wrap justify-content-between p-2 ">
        { books.map((book) =>{
return(
    <> 
    
     <Card className= "m-4 text-center" style={{ height:"30rem", width: '18rem' }} key= {book.asin} >
       <div style={{ height: '65%' }}>
        <Card.Img className="h-100 "  variant="top" src={book.img}/></div>
      <Card.Body >
        <Card.Title className="text-truncate" >{book.title} </Card.Title>
        <Card.Text>
        <h4>{book.price}0€</h4>
        </Card.Text>
        <Button className=" bottom-0 " variant="primary ">buy</Button>
      </Card.Body>
    </Card>
    
    </>

)
})}
</div>
 </>
    )
}