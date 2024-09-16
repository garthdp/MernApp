import { Link  } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Library</h1>
                </Link>
            </div>
            <div className="container">
                <Link to="/">
                    <h1>Signout</h1>
                </Link>
            </div>
            <div className="container">
                <Link to="/login">
                    <h1>Login</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar