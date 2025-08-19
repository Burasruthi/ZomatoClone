import React from "react";
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"; 
import { faLanguage } from "@fortawesome/free-solid-svg-icons";  

const Footer = () => {
  return (
    <>
    <div className="footerSection">
      <div className="footer">
       
            <div className="left">
                <h2>zomato</h2>
            </div>
            <div className="footer-right">

            
                <div className="right">
                    <img style={{height: "22px", width: "30px"}}
                        src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp"
                        alt="flag"
                    />
                    <h4>India</h4>
                    {/* ✅ use icon directly */}
                    <FontAwesomeIcon icon={faAngleDown} />
                 </div>
                <div className="right">
                    <p>&#127760;</p>
                    <h4>English</h4>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
      </div>
      <div className="footer-down">
        <div className="footer1">
            <h3>ABOUT ZOMATO</h3>
            <span>Who We Are</span><br></br>
            <span>Blog</span><br></br>
            <span>Work With Us</span><br></br>
            <span>Investor Relations</span><br></br>
            <span>Report Fraud</span><br></br>
            <span>Press Kit</span><br></br>
            <span>Contact Us</span>
        </div>
        <div className="footer1">
            <h3>ZOMAVERSE</h3>
            <span>Zomato</span><br></br>
            <span>Blinkit</span><br></br>
            <span>District</span><br></br>
            <span>Feeding India</span><br></br>
            <span>Hyperpure</span><br></br>
            <span>Zomato Live</span><br></br>
            <span>Zomaland</span><br></br>
            <span>Weather Union</span>

        </div>
        <div className="footer1">
            <h3>FOR RESTAURANTS</h3>
            <span>Partner With Us</span><br></br>
            <span>Apps For You</span><br></br>
        </div>
        <div className="footer1">
            <h3>LEARN MORE</h3>
            <span>Privacy</span><r></r>
            <span>Security</span><br></br>
            <span>Terms</span>
        </div>
        <div className="footer1">
            <h3>SOCIAL LINKS</h3>
            <div className="images">

            
                <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"/>
                <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"/>
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;

