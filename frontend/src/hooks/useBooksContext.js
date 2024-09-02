import { BooksContext } from "../context/BooksContext"
import { useContext } from "react"

export const useBooksContext = () => {
    const context = useContext(BooksContext)

    if(!context){
        throw Error('useBooksContext must be inside a booksContextProvider')
    }

    return context
}

// now evertime we want to use any book 