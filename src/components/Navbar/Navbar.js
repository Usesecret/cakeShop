import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
export const Navbar = () => {
    return (
        <div><nav className="navbar navbar-expand-lg navbar-light bg-none">
        <div className="container-fluid">
            <Link className="navbar-brand   text-light " to="#">Cake Shop</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active text-light" aria-current="page" to="#">Home</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-light" id="navbarDropdown" to="#" data-bs-toggle="dropdown" role="button" aria-expanded="false">Products</Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                    </ul>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link " to="#"    >
                    <img src='./cart4.svg'/>
                    </Link>
                    
                </li>
                
                </ul>
                
            </div>
        </div>
        </nav></div>
    )
}
export default Navbar
