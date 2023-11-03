import React from "react";

import Navbar from "../Components/Navbar/Navbar";
import Roadmap from "../Components/Roadmap/Roadmap";

export default function App()
{
    return(
        <div id="App">
            <Navbar />
            <div style={{display:"flex", height:"100%"}}>
                <Roadmap />
            </div>
        </div>
    )
}