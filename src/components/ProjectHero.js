import React from 'react'
import {Link} from "react-router-dom"
import "./ProjectHero.css"
const ProjectHero = () => {
  return (
    <div className="hero-baning">
      <div className="p">
        <h4 className="pr-name">Chat Bot</h4>
        <img src="https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" className="img-dear"></img>
        <p className="desc">A chat bot that I created using openai Api I used React in frontend and for backend I used Node js</p>
        <Link to="https://github.com/AamriGuleria/New-chat-b" className="visit">Visit</Link>
      </div>
      <div className="p">
        <h4 className="pr-name">Chat Application</h4>
        <img src="https://images.unsplash.com/photo-1556157382-4e063bb26661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="img-dear"></img>
        <p className="desc">A chat Application that I created using React in frontend and node js in backend Multiple users can join a particular chat space and have a chat</p>
        <Link to="https://github.com/AamriGuleria/chat-app" className="visit">Visit</Link>
      </div>
      <div className="p">
        <h4 className="pr-name">Recipe Application</h4>
        <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80" className="img-dear"></img>
        <p className="desc">A recipe application that I created using react It uses edamam Api to fetch the data It give all the information about any recipe you search</p>
        <Link to="https://github.com/AamriGuleria/Recipe-App" className="visit">Visit</Link>
      </div>
      <div className="p">
        <h4 className="pr-name">Task Manager Application</h4>
        <img src="https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="img-dear"></img>
        <p className="desc">A Task Manager Application that I created which made on Nodejs uses ejs templating and sqlite3 to store data It stores your task , deletes or edits it on your wish</p>
        <Link to="https://github.com/AamriGuleria/todo" className="visit">Visit</Link>
      </div>
      <div className="p">
        <h4 className="pr-name">Weather Application</h4>
        <img src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" className="img-dear"></img>
        <p className="desc">A simple weather application that uses openweather api to fetch all weather details of a particular place you searched</p>
        <Link to="https://github.com/AamriGuleria/weather" className="visit">Visit</Link>
      </div>
    </div>
  )
}

export default ProjectHero
