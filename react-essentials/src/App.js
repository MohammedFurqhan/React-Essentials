import React from 'react';
import logo from './logo.svg';
import {Routes , Route} from "react-router-dom"
import {Home , About , Contact , Post  , AllPost , CreatePost } from './pages'
import './App.css';
import NavBar from './pages/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path ="/Post" element ={<Post />} >
          <Route path ="/Post/createPost" element={<CreatePost />} />
          <Route path ="/Post/AllPost" element={<AllPost />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
