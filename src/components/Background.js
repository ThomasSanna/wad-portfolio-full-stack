import React from "react";
import background from "../utilities/videos/BackgroundHome.mp4";

function Background() {
    return(
        <video autoPlay muted loop id="VideoBackground">
            <source src={background} type="video/mp4" />
        </video>
    );
}; 