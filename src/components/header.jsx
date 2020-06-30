import React  from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    
    return (
        <nav className="navbar-toggle navbar-dark navbar navbar-expand-lg fixed-top" style={{backgroundColor: "#191A1D"}} id="mainNav">
            <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to="/my-portfolio">Dav K</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0 menu">
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}
