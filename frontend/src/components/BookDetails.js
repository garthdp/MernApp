const BookDetails = ({book}) => {
    return (
        <div className="book-details">
            <h4>{book.title}</h4>
            <p4><strong>Author: </strong>{book.author}</p4><br></br>
            <p4><strong>Quantity: </strong>{book.quantity}</p4><br></br>
            <p4>{book.createdAt}</p4><br></br>
        </div>
    )
}

export default BookDetails