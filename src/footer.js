import React from "react";
import "./styling/footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  return (
    // <div className='footer'>
    <footer class="footer">
      <div class="containerss">
        <div class="row">
          <div class="footer-col">
            <h4>About Us</h4>
            <p>
            At Agriconnect, we're dedicated to empowering farmers and
              cultivating prosperous futures. We bridge the gap between farmers
              and customers, fostering a community where agriculture thrives.
              Join us in nurturing a sustainable, profitable, and accessible
              future for all.
            </p>
          </div>
          <div class="footer-col">
            <h4>Follow Us </h4>
            <div class="social-links">
              <a href="#">
              <InstagramIcon className="icons"/>
              </a>
              <a href="#">
              <TwitterIcon className="icons"/>
              </a>
              <a href="#">
              <FacebookIcon className="icons"/>
              </a>
              <a href="#">
              <LinkedInIcon className="icons"/>
              </a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact Info</h4>
            <a href="#">
              <i class="fa-solid fa-location-dot"></i>
            </a>
            <p>123 Duvvada Visakhapatnam,pin-530046,Andhra Pradesh</p>
            <a href="#">
              <i class="fa-solid fa-phone"></i>
            </a>
            <p>+91 83743 39100</p>
            <p>+91 78426 10943</p>
            <a href="#">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <p>rashidshaik354@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
    // </div>
    // </div>
  );
}
