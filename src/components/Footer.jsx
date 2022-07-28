import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    return (
        <div>
            <footer> 
                <p>By Pratiksha Kadam ⓒ {year}</p>
            </footer>
        </div>
    );
}

export default Footer;