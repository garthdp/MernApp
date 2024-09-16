import { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"

const Login = () => {

    return (
        <form className="create">
            <div className="Home">
                <label>Email:</label>
                <input 
                    type="text"/>
                    
                <label>Password:</label>
                <input 
                    type="Password:"/>

                <button className=".btn-signin">Login</button>
            </div>
        </form>
    )
}

export default Login