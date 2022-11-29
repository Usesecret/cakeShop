import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
export const Navbar = () => {
    return (
        <div className='nav-wrap'><nav className="navbar navbar-expand-lg navbar-light bg-none sticky-top">
            <div className="nav-wrapper">
            <Link className="navbar-brand dn1-none  text-light logo-title" to="#" >Cake Shop</Link>

        <div className="container-fluid " >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="navbar-brand active text-light d-flex align-items-center nav-home" aria-current="page" to="/" >Home</Link>
                </li>
                <li className="nav-item dropdown ">
                    <Link className="nav-link dropdown-toggle text-light"
                        id="navbarDropdown"
                        role="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                        >
                        <Link className='navbar-brand text-light nav-products ' >Products</Link>
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/products">All</Link></li>
                        <li><Link className="dropdown-item" href="#">Cakes</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href="#">Drinks</Link></li>
                    </ul>
                </li>
                <li className="nav-item nav-svg-basket">
                    <Link className="nav-link " to="basket"    >
                    <div className='rounded-circle   d-flex justify-content-center align-items-center basket-num'>
                        13</div>
                    <img src='./cart4.svg' />
                    </Link>
                    
                </li>
                </ul>
                
            </div>
        </div>
            <Link className="navbar-brand  dn2-none text-light " to="#" >Cake Shop</Link>

            </div>
        </nav></div>
    )
}
export default Navbar
