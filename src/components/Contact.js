import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const  login  = JSON.parse(localStorage.getItem('auth'));
  const navigate = useNavigate();
  const userID = login?.user?._id

  console.log(userID)
 

  const handleSubmit = (event) => { 

    if(!userID){
      navigate("/login");
      return; 
    }


  axios.post(`http://localhost:6060/api/v1/users/contact`,{name ,email, message, userID })
            .then((response) => {
               alert("Your Message send successfully")
               setName('')
               setEmail('')
               setMessage('')
            }); 
    event.preventDefault(); 
    // Submit form data to server or handle form validation
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Enter your name" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Enter your email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Enter your message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>

        <div className="c-btn">
          <button className="btn" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
