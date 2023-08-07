// eslint-disable-next-line
import React,{useState} from 'react'
import "./ContactMe.css"
const ContactMe = () => {
  const [email,setemail]=useState("");
  const [name,setname]=useState("");
  const [msg,setmsg]=useState("")
  const handle=async(e)=>{
    e.preventDefault();
    const res=await fetch("https://new-portfolio-439e3-default-rtdb.firebaseio.com/aamriform.json",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:email,
        name:name,
        msg:msg
      })
    })
    console.log(res)
      setemail("");
      setname("");
      setmsg("");
  }
  return (
    <div className="contact-pg">
      <center>
        <p className="contact-heading">Contact Me</p>
      </center>
      <div className="bind">
          {/* <div className="bind-img">
            <img src="https://media.istockphoto.com/id/1224015017/vector/contact-us-illustration-call-center-and-helpline-support-vector.jpg?s=2048x2048&w=is&k=20&c=pvgl_uVQ57zZKbs8kJD8EGoIcGGCWOzenG6Ul_ATOyU=" width="150px" height="150px"></img>
          </div> */}
          <form className="form">
            <input type="text" className="inp" placeholder="Type Your Email" value={email} onChange={(e)=>{setemail(e.target.value)}}required />
            <input type="text" className="inp" placeholder="Type Your Name" value={name} onChange={(e)=>{setname(e.target.value)}}required />
            <textarea className="inp" placeholder="Type Your Message" value={msg} onChange={(e)=>{setmsg(e.target.value)}} rows="10" required/>
            <button type="submit" className='subm' onClick={handle}>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default ContactMe
