import { NavLink } from "react-router-dom";

const NavBar = () => {
    
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
            <div className="container-fluid">
                <NavLink className="px-3 navbar-brand" to="/">React Redux Demo</NavLink>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/counter">Counter</NavLink>
                    </li>
                </ul>
            </div>
      </nav>
    );
}

export default NavBar;