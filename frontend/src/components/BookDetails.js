import { useBooksContext } from "../hooks/useBooksContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const BookDetails = ({book}) => {
    const { dispatch } = useBooksContext()
    const handleClick = async() => {
        const response = await fetch('api/books/' + book._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_BOOK', payload: json})
        }
    }

    return (
        <div className="book-details">
            <h4>{book.title}</h4>
            <p4><strong>Author: </strong>{book.author}</p4><br></br>
            <p4><strong>Quantity: </strong>{book.quantity}</p4><br></br>
            <p4>{formatDistanceToNow(new Date(book.createdAt), {addSuffix: true})}</p4><br></br>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default BookDetails