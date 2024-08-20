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
    
     <Card className= "m-4 text-center" style={{ width: '18rem' }} key= {book.asin} >
      <Card.Img className=" w-75" variant="top" src={book.img}/>
      <Card.Body>
        <Card.Title>{book.title} </Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary">buy</Button>
      </Card.Body>
    </Card>
    
    </>

)
})}
</div>
 </>
    )
}