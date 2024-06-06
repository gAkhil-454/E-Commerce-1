import React from "react";
import downarrow from "../assets/down.svg"

function Footer(){
    return(
        <footer className="footer">
            <div>
                <h4>CATEGORIES</h4>
                <p>Web Builder</p>
                <p>Hosting</p>
                <p>Data Center</p>
                <p>Robotic-Automation</p>
            </div>
            <div>
                <h4>CONTACT</h4>
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Catergories</p>
                <p>About</p>
            </div>
            <div className="country">
                <p>United States </p> 
                <img src={downarrow} />
            </div>

        </footer>
    );

}
export default Footer;