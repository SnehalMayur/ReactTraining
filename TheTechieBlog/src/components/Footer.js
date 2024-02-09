import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faMessage, faAddressBook, faMap } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div>
       <div className="footer">
            <div className="container">     
                <div className="row">                       
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <div className="single_footer">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Page Link</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blogs </a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div className="signup_form">                           
                                <form action="#" className="subscribe">
                                    <input type="text" className="subscribe__input" placeholder="Enter Email Address" />
                                    <button type="button" className="subscribe__btn"><FontAwesomeIcon icon={faPaperPlane} /></button>
                                </form>
                            </div>
                        </div>
                        <div className="social_profile">
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faMessage} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faAddressBook} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faMap} /></a></li>
                            </ul>
                        </div>                          
                    </div>       
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <p className="copyright">Copyright © 2024 <a href="#">The Techie blog</a>.</p>
                    </div>               
                </div>                
            </div>
        </div>
    </div>
  );
};

export default Footer;