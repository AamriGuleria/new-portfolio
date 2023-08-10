import React from 'react'
import "./HeroImg.css"
import im from "../assets/p3.jpg";
import edu from "../assets/edu.png";
const HeroImg = () => {
  return (
    <div className="hero-img">
      <div className="me">
        <div className="left-p">
          <h4 className="me1">Who I am?</h4>
          <p className='me-c'>My Name is Aamri Guleria</p>
          <p className='me-c'>I am a Web developer and a python programmer</p>
          <p className='me-c'>I love to learn new things and to implement my learnings in real life</p>
          <p className='me-c'>In my leisure time I love to sing and listen to music</p>
        </div>
        <div className="right-p">
          <center>
            <img height="150px" width="150px" src={im}></img>
          </center>
        </div>
      </div>
      <div className="edu">
        <center>
          <h4>Education</h4>
          <div className='edu-n'>
            <center>
              <div className="e">
                <div><img src={edu} height="60px" width="60px"></img></div>
                <div>
                <p className='year'><span>2009-2019</span></p>
                <p className='ins'>Secondary Education</p>
                <p className='s-name'>Omkarananda Saraswati Nilayam,Rishikesh</p>
                </div>
              </div>
              <div className="e">
              <div><img src={edu} height="60px" width="60px"></img></div>
              <div>
                <p className='year'><span>2019-2021</span></p>
                <p className='ins'>Higher Secondary Education</p>
                <p className='s-name'>Omkarananda Saraswati Nilayam,Rishikesh</p>
                </div>
              </div>
              <div className="e">
              <div><img src={edu} height="60px" width="60px"></img></div>
              <div>
                <p className='year'><span>2023 present</span></p>
                <p className='ins'>Btech Computer Science</p>
                <p className='s-name'>DIT University Dehradun</p>
              </div>
              </div>
              </center>
          </div>
        </center>
      </div>
      <div className="skills">
        <div className="sk-p">
        <h4>Skills✍🏻</h4>
        <center>
        <img src="https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148158600.jpg?w=740&t=st=1691148262~exp=1691148862~hmac=472692b4e0de3719d4b3b7679f791d546920921950ade58a812ceefedd00aa9a" width="200px" height="200px"></img>
        </center>
        </div>
        <div className='skill py' >
        </div>
        <div className='skill java'>
        <img></img>
        </div>
        <div className='skill flask'>
        <img></img>
        </div>
        <div className='skill html'>
        <img></img>
        </div>
        <div className='skill css'>
        <img></img>
        </div>
        <div className='skill js'>
        <img></img>
        </div>
        <div className='skill react'>
        <img></img>
        <p>ReactJs</p>
        </div>
        <div className='skill node'>
        <img></img>
        </div>
        <div className='skill ms'>
        <img></img>
        </div>
        <div className='skill c'>
        <img></img>
        </div>
      </div>
      <div className="certification">
        <h4>Certifications 📜</h4>
        <p>Download By clicking</p>
        <a href="src\assets\python_basic certificate.pdf" download>Hackerrank Python Certificate</a>
        <a href="src\assets\sql_basic certificate.pdf" download>Hackerrank SQL Certificate</a>
        <a href="src\assets\css certificate.pdf" download>Hackerrank CSS Certificate</a>
        <a href="src\assets\java_basic certificate.pdf" download>Hackerrank Java Certificate</a>
        <a href="src\assets\i1.pdf" download>Programming Fundamentals using Python - Part 2 by infosys springboard</a>
        <a href="src\assets\i2.pdf" download>Programming Fundamentals using Python - Part 1 by infosys springboard</a>
        <a href="src\assets\i3.pdf" download>Basics of Python by infosys springboard</a>
      </div>
      <div className="resume">
      <a href="src\assets\the_new_resume.pdf" download>Click Here To Download Resume 📥</a>
      <img src="https://media.istockphoto.com/id/1310732908/vector/job-interview-process-hiring-new-employees-interview-and-recruitment-concept.jpg?s=612x612&w=0&k=20&c=TcDB6rBPFbBdtx2veOjbB8ujBP_H1h3_1PreyOK3hyA=" width="150px" height="150px"></img>
      </div>
      {/* <div className="img-part">
        <img src="https://images.pexels.com/photos/205505/pexels-photo-205505.jpeg?auto=compress&cs=tinysrgb&w=600" className="yo-img" />
      </div>
      <div className="about-part">
        <center>
          <p className="about-me">About me 😎</p>
          <div className="this">
            <p className="text-here">Hey 👻</p>
            <p className="text-here">I am a Full Stack Developer 💻🖱</p>
            <p className="text-here">I'm doing Btech in computer Science from Dit University Dehradun</p>
            <p className="text-here">I'm currently in third year</p>
            <p className="text-here">I am a passionate and creative full stack developer</p>
            <p className="text-here">I am an extremely imaginative and creative person who tries to put it all in her websites✌️</p>
            <div className="but">
              <button className="c1">Contact Me</button>
              <button className="c2">Send an email</button>
            </div>
          </div>
        </center>
      </div> */}
    </div>
  )
}

export default HeroImg
