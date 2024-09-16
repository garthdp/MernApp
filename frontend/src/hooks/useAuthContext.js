import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useBooksContext must be inside a booksContextProvider')
    }

    return context
}

// now evertime we want to use any book 