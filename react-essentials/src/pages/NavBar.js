import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheet/style.css"

const NavBar =() =>{
    return(
        <div className="body">
        <nav className="navbar">
            <ul>
                <li>
                    <Link className="logo" to="/"><span className="logo">MF</span></Link>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/About">About</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    
                    
                        <div class="dropdown">
                            <span class="dropbtn">Post</span>
                            <div class="dropdown-content">
                                <Link className="drop-link" to="/Post/createPost">Create Post</Link>
                                <Link className="drop-link" to="Post/allPost">All Post</Link>
                            </div>
                        </div>
                        
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar;