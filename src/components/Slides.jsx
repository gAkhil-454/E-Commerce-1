import React from "react";
import webinfo from "../webinfo";
import InfoCard from "./InfoCard";
import tick from "../assets/circletick.svg"
import cimg from "../assets/cardimg.svg";
import down from "../assets/bluedown.svg";
import info from "../assets/info.svg";
import rating from "../assets/rating.svg";
function createcard(props){
    return(
        <InfoCard 
        id = {props.id}
        name = {props.name}
        des = {props.des}
        wyg = {props.wyg}
        rating = {props.rating}
        remark = {props.remark}
        />
    );
}
function Slides(){
    return(
        <div>
           {webinfo.map(createcard)} 
           <div className="infocard">
            <div className="left">
                    <div className="cardimg">
                        <img src={cimg} />
                        <p>Builder 1</p>
                    </div>
                    <div className="info"> 
                        <p><b>CDK Resposive Builder:</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                        <h4>Main Highlights</h4>
                        <div className="highlights">
                            <p><span>9.9</span>Building Responsive</p>
                            <p><span>8.9</span>Cool</p>
                            <p><span>8.9</span>Docs</p>
                        </div>
                        <div className="wwli">
                            <p><span>Why we love it</span></p>
                            <p><img src={tick} /> Building Responsive</p>
                            <p><img src={tick} /> Cool</p>
                            <p><img src={tick} /> Docs</p>
                        </div>
                        <a href="#"> show more<img  src={down} /></a>
                    </div>
            </div>
            
            <div className="rating">
                <div className="ratingbox">
                    <img src={info} className="infopic" />
                    <h2> 9.1</h2>
                    <p>Very Good</p>
                    <img src={rating}  />
                </div>
                <div className="view" >
                    <p> View </p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Slides;