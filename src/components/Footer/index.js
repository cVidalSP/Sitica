import React from 'react';

import { FaCopyright } from "react-icons/fa";

import './index.css';

export default function Footer(){
    return(
        <div className="footerContainer">
            <p>2018 <FaCopyright style={{marginLeft: "10px"}}/>sitica made by <p className="graficSparkText">GraficSpark</p></p>
        </div>
    )
}