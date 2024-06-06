import React from "react";
import cimg from "../assets/cardimg.svg";
function Dealcard(){
    return(
        <div className="dealcard">
            <img  src={cimg} alt="h" />
            <p><span> 20% Off</span> <span>Limited time</span></p>
            <p className="name"><center><b>Webbuilder 1</b> </center></p>
            <p className="des">Computer Modern classic with mix support</p>
            <div className="rates"><p className="final">$39.96</p> <p className="ori">$49.96</p> <p className="discount">(20%off)</p> </div>
            <div className="dealbut"> <center><p> View Deal</p></center></div>
        </div>
    );
}
export default Dealcard;