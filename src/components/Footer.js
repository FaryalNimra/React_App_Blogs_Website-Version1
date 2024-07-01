import React from 'react';
import './Footer.css'; 
import facebookIcon from './Facebook.png';
import instagramIcon from './Instagram.png'
import twitterIcon from './Twiter.png'
const Footer = () => {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h4>LOGO</h4>
                    <br></br>
                    <p>We believe in the boundless power of education to shape lives and open doors to endless possibilities. Step into our virtual classroom</p>
                    </div>
                <div className="box">
                    <h4>Information</h4><br></br>
                    <p>Press Centre</p>
                    <p>Our Blog</p>
                    <p> Term and Condition</p><br></br>
                    <h4>Contact</h4><br></br>
                    <p>Phone : +123 456 789</p>
                    <p>Email   : @example.com</p>
                </div>

                <div className="box">
                    <h4>Menu</h4><br></br>
                    <p> About</p>
                    <p> Destination</p>
                    <p>Testimonials</p><br></br>
                   <h4>Company</h4><br></br>
                   <p>Term & conditions</p>
                   <p>Privacy Policy</p>
                </div>

                <div className="box">
                    <h4>Get in Touch </h4><br></br>
                    <div className="icons-container">
            <img src={facebookIcon} alt="Facebook Icon 1" className="icon3" />
            <img src={instagramIcon} alt="Facebook Icon 2" className="icon3" />
            <img src={twitterIcon} alt="Facebook Icon 3" className="icon3" />
            </div><br></br>
            <p>Sign up for our newsletter</p>
            <div className="subscribe-container">
            <input type="text" className="subscribe-input" placeholder="Enter your email" />
            <button className="subscribe-button">Subscribe</button>
        </div>
                </div>
            </div>

           
        </section>
    );
}

export default Footer;
