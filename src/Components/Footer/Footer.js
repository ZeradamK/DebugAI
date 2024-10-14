import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-logo flex flex-row">
                    <img
                        src="/bug.png"
                        alt="BrandLogo"
                        width="50"
                        height="50"
                        className="d-inline-block align-top light"
                    />
                    <h1>Bug AI</h1>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <a href="/">About us</a>
                        <a href="/">Team</a>
                        <a href="/">Careers</a>
                        <a href="/">Socials</a>
                        <a href="/">Activity</a>
                    </div>
                    <div className="footer-column">
                        <a href="/">Platform</a>
                        <a href="/">Pricing</a>
                        <a href="/">Solutions</a>
                        <a href="/">Plans</a>
                    </div>
                    <div className="footer-column">
                        <a href="/">Blog</a>
                        <a href="/">Use Cases</a>
                        <a href="/">Testimonials</a>
                        <a href="/">Insights</a>
                    </div>
                    <div className="footer-column">
                        <a href="/">Terms & Conditions</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Cookies</a>
                        <a href="/">Refunds</a>
                        <a href="/">License</a>
                    </div>
                </div>


                <div className="footer-socials">
                    <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://pinterest.com"><FontAwesomeIcon icon={faPinterestP} /></a>
                </div>
            </div>


            <div className="footer-bottom">
                <a href="/">Terms & Conditions</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Cookies</a>
                <a href="/">Refunds</a>
                <a href="/">License</a>
            </div>
        </footer>
    );
};

export default Footer;
