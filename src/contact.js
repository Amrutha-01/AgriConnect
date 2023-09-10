import React from "react";
import "./styling/contact.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { Block } from "@mui/icons-material";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <div className="contact-divs">
          <label>Name: </label>
          <input className="input" type="text" name="name" placeholder="Enter Your Name"/>
        </div>
        <div className="contact-divs ">
          <label>Email: </label>
          <input className="input" type="email" name="email" placeholder="Enter Your Email" style={{width: "66vh"}}/>
        </div>
        <div className="contact-divs">
          <label>Subject: </label>
          <input className="input" type="text" name="subject" placeholder="Enter Subject" />
        </div>
        <div className="contact-divs">
          <label>Message: </label>
          <textarea name="message" placeholder="Enter Your Message"></textarea>
        </div>
        <button className="btn" type="submit" style={{backgroundColor:"green"}}>
          Submit
        </button>
      </form>
      <div className="socials">
        <div className="social-boxes">
          <div className="social-box">
            <LocationOnIcon className="icons"/>
            <p className="social-text">Vizag,Andhra Pradesh</p>
          </div>
          <div className="social-box">
            <LocalPhoneIcon className="icons"/>
            <p className="social-text">+91 8639163753</p>
          </div>
          <div className="social-box">
            <MailIcon className="icons"/>
            <p className="social-text">xy@gmail.com</p>
          </div>
          <div className="social-box">
          <LinkedInIcon className="icons"/>
          <p className="social-text">xyz</p>
        </div>
        </div>
      </div>
    </div>
  );
}
