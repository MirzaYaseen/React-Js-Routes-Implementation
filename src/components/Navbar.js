import React,{useState} from 'react';

import {Link} from 'react-router-dom';
import './Navbar.css';

import {IconContext} from 'react-icons';
function Navbar() {
  
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <nav className="navbar navbar-expand ">
        <div className='navbar'>
            
        <a href="/" className="navbar-brand">
            <h1 className='nav-welcome'>Welcome To LMS</h1>
            </a>
        </div>

       
       
            
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/assignstudent"} className="nav-link">
              Assign Student
            </Link>
            </li>
            <li className="nav-item">
            <Link to={"/getmaterial"} className="nav-link">
              Get Material
            </Link>
            </li>
            <li className="nav-item">
            <Link to={"/getassign"} className="nav-link">
              Get Assignment
            </Link>
            </li>
            </div>
            </nav>
        
        </IconContext.Provider>
        </>
    )
}

export default Navbar