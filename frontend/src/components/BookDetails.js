const BookDetails = ({book, deleteBook}) => {

    const handleClick = () => {
        deleteBook(book._id)
    }

    return (
        <div className="book-details">
            <h4>{book.title}</h4>
            <p4><strong>Author: </strong>{book.author}</p4><br></br>
            <p4><strong>Quantity: </strong>{book.quantity}</p4><br></br>
            <p4>{book.createdAt}</p4><br></br>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default BookDetails