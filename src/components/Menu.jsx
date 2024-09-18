import React from "react";
import check from "../assets/checkbox.svg"
import info from "../assets/info.svg"
import downarrow from "../assets/down.svg"
import rightarrow from "../assets/right.svg"
function Menu(){
    return(
        <div className="menubar">
            <h1>Best Website builders in the world</h1>
            <div className="ruler"> </div>
            <div className="menu1">
                <div className="left">
                    <img src={check}  alt="h" />
                    <p>  Last Updated - February 22, 2020 &ensp; &ensp;</p>
                    <img src={info}  alt="h" />
                    <p> Advertising Disclosure</p>
                </div>
                <div className="right">
                    <p>Top Relevant</p>  
                    <img src={downarrow}   alt="h" />
                </div>
                
            </div> 
            <div className="ruler"> </div>
            <div className="menu2">
                 <div className="menu2items"><p>Tools</p></div>
                 <div className="menu2items"><p>AWS Builder</p></div>
                 <div className="menu2items"><p>Start Build</p></div>
                 <div className="menu2items"><p>Build Supplies</p></div>
                 <div className="menu2items"><p>Tooling</p></div>
                 <div className="menu2items"><p>BlueHosting</p></div>
            </div>
            <div className="menu3">
                <div className="menu3items"><p>Home</p></div>
                <img src={rightarrow}  alt="h" />
                <div className="menu3items"><p>Hosting for all</p></div>
                <img src={rightarrow}  alt="h" />
                <div className="menu3items"><p>Hosting</p></div>
                <img src={rightarrow}   alt="h"/>
                <div className="menu3items"><p>Hosting6</p></div>
                <img src={rightarrow}   alt="h"/>
                <div className="menu3items"><p>Hosting5</p></div>
            </div>

        </div>
    );
}

export default Menu;