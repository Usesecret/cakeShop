import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
export const Navbar = () => {
    return (
        <div><nav className="navbar navbar-expand-lg navbar-light bg-none ">
            <Link className="navbar-brand   text-light " to="#" style={{paddingLeft:3+ "em"}}>Cake Shop</Link>
        <div className="container-fluid " style={{paddingLeft:30+ "%"}}>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="navbar-brand active text-light d-flex align-items-center" aria-current="page" to="/">Home</Link>
                </li>
                <Link className='navbar-brand text-light' to="/products"> Products</Link>
                
                <li className="nav-item ">
                    <Link className="nav-link " to="basket"    >
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
