import { Logo_URL } from "../utils/Constants";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
         <div class="container">
  	 	    <div class="row">
                <div class="footer-col">
                    <div className="logo-container">
                        <img className="logo" src={ Logo_URL } alt="Logo"/>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">privacy policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
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