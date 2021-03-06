import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
                <Link to='/'>
                    <img src='./coderhouse-logo.png' width='70'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/Productos/Celulares'>Celulares</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Productos/Computadoras'>Computadoras</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Productos/Relojes'>Relojes</Link>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar