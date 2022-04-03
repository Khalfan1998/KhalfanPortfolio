import React, { useState,useRef } from 'react';
import emailjs from "emailjs-com"
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_pnbiq7t',e.target, 'user_55A95fDRXwEhih3fhx36R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
      e.target.reset()
  };

  return (
    <>
      <h2 className="head-text">Contact Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:khalfan.ikns@gmail.com" className="p-text">khalfan.ikns@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+973 39311555" className="p-text">+973 39311555</a>
        </div>
      </div>
      
      
        <form onSubmit={sendEmail} className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Subject" name="subject"  />
          </div>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name"  />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email"  />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"  
              name="message"
            />
          </div>
          <button type="submit" className="p-text" >Send Message</button>
        </form>
  
   
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);