import { logout } from "./firebase";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light sticky-top">
            <button
                className="logout__btn"
                onClick={logout}
            >
                Logout
            </button>
        </nav>
    );
};

export default Navbar;