import React,{useState} from 'react'
import "./Navbar.css"
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import img from "../assets/real.jpg"
const Navbar = () => {
    const [color,setcolor]=useState(false);
    const handlescroll=()=>{
        if(window.scrollY>100){
            setcolor(true);
        }
        else{
            setcolor(false);
        }
    }
    window.addEventListener("scroll",handlescroll);
  return (
    <div className={color?"bg":"navbar"}>
        <div className="head">
            <p className="my-name">Aamri</p>
        </div>
      <ul className="contents">
        <li className="nav-ele">
      <Link to="/" className="home">HOME</Link>
      </li>
      <li className="nav-ele">
      <Link to="/about" className="about">ABOUT</Link>
      </li>
      <li className="nav-ele">
      <Link to="/project" className="project">PROJECTS</Link>
      </li>
      <li className="nav-ele">
      <Link to="/contact" className="contact">CONTACT</Link>
      </li>
      </ul>
    </div>
  )
}

export default Navbar
