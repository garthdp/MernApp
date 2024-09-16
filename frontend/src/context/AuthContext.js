import {createContext, useReducer} from "react"

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type){
        case 'login':
            return{
                books: action.payload
            }
        case 'logout':
            return{
                books: [action.payload, ...state]
            }
        case 'signup':
            return{
                books: state.books.filter((b) => b._id !== action.payload._id)
            }
        default: 
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        auth: []
    })
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}