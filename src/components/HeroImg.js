import React from 'react'
import "./HeroImg.css"
import im from "../assets/p3.jpg";
import edu from "../assets/edu.png";
const HeroImg = () => {
  const fileUrl='http://localhost:3000/the_new_resume.pdf';
  const fileUrl1='http://localhost:3000/python_basic certificate.pdf';
  const fileUrl2='http://localhost:3000/sql_basic certificate.pdf';
  const fileUrl3='http://localhost:3000/css certificate.pdf';
  const fileUrl4='http://localhost:3000/java_basic certificate.pdf';
  const fileUrl5='http://localhost:3000/i1.pdf';
  const fileUrl6='http://localhost:3000/i2.pdf';
  const fileUrl7='http://localhost:3000/i3.pdf';
  const download=(url)=>{
    const fileName=url.split('/').pop()
    const tag=document.createElement("a");
    tag.href=url
    tag.setAttribute('download',fileName)
    document.body.appendChild(tag);
    tag.click()
    tag.remove();
  }
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
          <h4>Education📓</h4>
          <div className='edu-n'>
            <center>
              <div className="e">
                <div><img src="https://cdn.pixabay.com/photo/2014/04/02/10/21/graduation-303565_1280.png" height="60px" width="60px"></img></div>
                <div>
                <p className='year'><span>2009-2019</span></p>
                <p className='ins'>Secondary Education 📝 <br/>Omkarananda Saraswati Nilayam, Rishikesh</p>
                {/* <p className='s-name'>Omkarananda Saraswati Nilayam,Rishikesh</p> */}
                </div>
              </div>
              <div className="e">
              <div><img src="https://cdn.pixabay.com/photo/2014/04/02/10/21/graduation-303565_1280.png" height="60px" width="60px"></img></div>
              <div>
                <p className='year'><span>2019-2021</span></p>
                <p className='ins'>Higher Secondary Education 📝 <br/>Omkarananda Saraswati Nilayam, Rishikesh</p>
                {/* <p className='s-name'>Omkarananda Saraswati Nilayam,Rishikesh</p> */}
                </div>
              </div>
              <div className="e">
              <div><img src="https://cdn.pixabay.com/photo/2014/04/02/10/21/graduation-303565_1280.png" height="60px" width="60px"></img></div>
              <div>
                <p className='year'><span>2023 present</span></p>
                <p className='ins'>Btech Computer Science 📝 <br/> DIT University, Dehradun</p>
                {/* <p className='s-name'>DIT University Dehradun</p> */}
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
        <p>Click To Download</p>
        <a  onClick={()=>{download(fileUrl1)}}>Hackerrank Python Certificate</a>
        <a onClick={()=>{download(fileUrl2)}}>Hackerrank SQL Certificate</a>
        <a onClick={()=>{download(fileUrl3)}}>Hackerrank CSS Certificate</a>
        <a onClick={()=>{download(fileUrl4)}}>Hackerrank Java Certificate</a>
        <a onClick={()=>{download(fileUrl5)}}>Programming Fundamentals using Python - Part 2 by infosys springboard</a>
        <a onClick={()=>{download(fileUrl6)}}>Programming Fundamentals using Python - Part 1 by infosys springboard</a>
        <a onClick={()=>{download(fileUrl7)}}>Basics of Python by infosys springboard</a>
      </div>
      <div className="resume">
      <button onClick={()=>{download(fileUrl)}}>Resume</button>
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
