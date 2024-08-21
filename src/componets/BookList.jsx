import { Component } from "react";
import { SingleBook } from "./SingleBook";


 export class BookList extends Component {
render (){
    return (
       this.props.listaBook.map((book)=> {
            return ( 
                <SingleBook title={book.title} img={book.img} asin={book.asin}
                price={book.price} />
            )
        }
        
        )
    )
}

}