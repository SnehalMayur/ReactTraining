import { Logo_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
         <div className="container">
  	 	    <div className="row">
                <div className="footer-col">
                    <div className="logo-container">
                        <img className="logo" src={ Logo_URL } alt="Logo"/>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="#">privacy policy</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">order status</Link></li>
                        <li><Link to="#">payment options</Link></li>
                    </ul>
                </div>
  	 	    </div>
            <div className="row">
                <div className="copyright-Section">
                    <p className="copyright">Copyright © {year} <a href="#">The Food App</a>.</p>
                </div>               
            </div> 
  	    </div>
      </div>
      
    );
  };
     
  export default Footer;