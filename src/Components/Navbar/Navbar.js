import React from "react";
import "./Navbar.css"


export default function Navbar()
{
    return(
        <div id="Navbar">
            <ul>
            <li><a href="/">Home</a></li>
            <li className="right"><a class="active" href="#about">Filonzi Jacopo</a></li>
            </ul>
        </div>
    )
}