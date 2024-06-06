import React from "react";
import Dealcard from "./DealCard";
function Deals(){
    return(
        <div className="deals">
        <h1>Related deals you might like for</h1>
        <div className="dealslides"> 
            <Dealcard />
            <Dealcard />
            <Dealcard />
        </div>
        
        </div>
    );

}
export default Deals;