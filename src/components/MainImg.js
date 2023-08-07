import React from 'react' 
import "./MainImg.css"
import newImg from "../assets/p1.jpg"
import smol_img from "../assets/hello.jpg"
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
const MainImg = () => {
  return (
    <>
      <div className="main-main">
        <div className="Hero">
          <div className="Main-img">
            <img src="https://media.istockphoto.com/id/1215741500/photo/round-circle-picture-frame-with-two-tone-neon-color-shade-motion-graphic-on-isolated-black.jpg?s=612x612&w=0&k=20&c=GCTK_oaSqd52aH8SiZIHzMXb3qCf6S_tmu5i9Cloo-w=" className="back-img" />
          </div>
          <div className="my-content">
            <p className='hi'>Hii, I am a</p>
            <p className='creative'>CREATIVE</p>
            <p className='end'><span className="one">Full</span> <span className="two">Stack</span> <span className="three">Developer</span></p>
          </div>
        </div>
        {/* <div className="second">
          <img src={newImg}/>
        </div> */}
      </div>
    </>
  )
}

export default MainImg
