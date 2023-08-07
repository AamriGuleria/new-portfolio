import React from 'react'
import "./Footer.css"
import email from "../assets/email-icon.png"
import phone from "../assets/phone-img.png"
import home from "../assets/home-img.png"
import { Link,BrowserRouter } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <p className="email"><img src="https://img.icons8.com/?size=512&id=44829&format=png" width="60px" height="60px" className="email-img"/><span className="em">guleriaaamri@gmail.com</span></p>
        <p className="phone"><img src="https://img.icons8.com/?size=512&id=44034&format=png" width="60px" height="60px" className="phone-img"/><span className="ph">8279572550</span></p>
        <p className="home"><img src="https://img.icons8.com/?size=512&id=44013&format=png" width="60px" height="60px" className="home-img"/><span className="loc">Rishikesh,Uttarakhand</span></p>
      </div>
      <div className="right">
        <p className='name'>Aamri</p>
        <p className='details'>I'm Pursuing Btech in Computer Science From Dit University,Dehradun</p>
        <div className="social-m">
            <Link to="https://www.linkedin.com/in/aamri-guleria-712968223/" className="linkedin"><img src="https://img.icons8.com/?size=512&id=44019&format=png" width="60px" height="60px"/></Link>
            <Link to="https://github.com/AamriGuleria" className="github"><img src="https://img.icons8.com/?size=512&id=u9R54eMKS8fw&format=png" width="60px" height="60px"/></Link>
            <Link to="https://www.instagram.com/direct/t/100833684655269/" className="insta"><img src="https://img.icons8.com/?size=512&id=119026&format=png" width="60px" height="60px"/></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
