import React from "react";
import { Link , Outlet} from "react-router-dom";
import HomePage from './pages/Home';
export function Home(){
    return(
        <div>
        {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/post">Post</Link>
        </nav> 
           <h1>This is Home Page</h1>
        */}
     
        <HomePage />
        </div>
    )
}

export function About(){
    return(
        <div>
        {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/post">Post</Link>
        </nav> */}
        <h1>This is About Page</h1>
        </div>
    )
}
export function Contact(){
    return(
        <div>
        {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/post">Post</Link>
        </nav> */}
        <h1>This is Contact Page</h1>
        </div>
    )
}
export function Post(){
    return(
        <div>
        <h1>This is Post Page</h1>
        {/* <nav> */}
            {/* <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/post">Post</Link> */}
            <Outlet />
        {/* </nav> */}
        </div>
    )
}
export function CreatePost(){
    return(
        <div>
            <h1>This is Create Post page</h1>
        </div>
    )
}
export function AllPost(){
    return(
        <div>
            <h1>This is All Post page</h1>
        </div>
    )
}