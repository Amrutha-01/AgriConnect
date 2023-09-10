import React from "react";
import AgriConnectLogo2 from "./AgriConnectLogo2.png";
import "./styling/nav.css";
// import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function NavBar() {
  const [click, setClick]=useState(false);
  const handleClick = () =>setClick(!click);
  return (
    <div className="navBar">
      <img className="logo" src={AgriConnectLogo2} />
      {/* <img src="https://media.istockphoto.com/id/516688358/photo/freedom.jpg?s=612x612&w=0&k=20&c=taveej0OXa9YdGy4YOHQIRm4ghgR1k0__jrHVrgXwpU="/> */}
      <div className="sections">
        <a href="#" className="links">
          Home
        </a>
        <a href="#" className="links">
          Login
        </a>
        <a href="#" className="links">
          About Us
        </a>
        <a href="#" className="links">
          Contacts
        </a>
      </div>
    </div>
  );
}
