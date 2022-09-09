import React from "react";
import "./Footer.css";
import cart from "../../../images/ricey W.png";
import {
  FaGooglePlay,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { BsApple } from "react-icons/bs";

const Footer = () => {
  return (
    // <footer id="footer">
    //   <div className="leftFooter">
        /* <h3>Download </h3> */
        /* <p>Download App for Android and IOS</p> */
        /* <div className="appContainer">
          <a href="https://github.com/showbazi">
            <BsApple className="iconStyle" />
          </a>
          <a href="https://github.com/showbazi">
            <FaGooglePlay className="iconStyle" />
          </a>

        </div> */
        /* <img src={playstore} alt="playstore" />
              <img src={appstore} alt="appstore" /> */
        /* <h1>
          <img src={cart} alt="cart" width="250" />
        </h1>
      </div>

      <div className="midFooter">
        <h1>Ricey.</h1>
        <p>Quality Foods at your DoorStep</p>
        <p>Copyrights &copy; 2022 Ricey.</p>
      </div>

      <div className="rightFooter">
        <h3>Follow</h3>
        <div className="socialsContainer"> */
          /* <a href="https://github.com/showbazi">
            <FaInstagram className="iconStyle" />
          </a> */

          /* <a href="https://github.com/showbazi">
            <FaFacebook className="iconStyle" />
          </a>

          <a href="https://github.com/showbazi">
            <FaTwitter className="iconStyle" />
          </a>

          <a href="https://github.com/showbazi">
            <FaLinkedin className="iconStyle" />
          </a>

          <a href="https://github.com/showbazi">
            <FaGithub className="iconStyle" />
          </a>
        </div>
      </div>
    </footer> */
    <footer id="footer">
    <div className="leftfooter">
      
      <h1>
        <img src={cart} alt="cart" width="250" />
      </h1>
    </div>
    <div className="midfooter">
              <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      
      <a href="#" class="fa fa-linkedin"></a>
      <a href="#" class="fa fa-youtube"></a>
      <a href="#" class="fa fa-instagram"></a>

      <p>High <span className="black"> quality </span> is our <span className="black"> priority </span> </p>
      <p>Copyrights 2022 <span className="black"> &copy; Ricey </span></p>
    </div>
    <div className="rightfooter">
      <h4>Our Team</h4>
      <a>@Sriram</a>
      <a>@Dayani</a>
      <a>@Saagish</a>
     
    </div>
  </footer>
  );
};

export default Footer;
