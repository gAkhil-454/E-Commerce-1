import React from "react";
import Search from "../assets/search.svg"

function Header(){
    return (
            <header>
            <div className="search">
                <img src={Search}  alt="h" />
            </div>

            <div className="menu">
                <p>Categories</p>
                <p>Website Builders</p>
                <p>Today&#39;s deals</p>

            </div>
            
            </header>
    );
        
}
export default Header;