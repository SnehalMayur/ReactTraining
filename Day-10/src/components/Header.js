import { Logo_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={ Logo_URL } alt="Logo"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>{ isOnline ? <FontAwesomeIcon icon={faUser} /> : <FontAwesomeIcon icon={faArrowAltCircleRight} /> }</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;