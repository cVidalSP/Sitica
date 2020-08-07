import React from 'react'

import './index.css';

export default function HeaderItem(props){
    const { letter, title, color1, color2 } = props;
    return(
        <div className="title">
            <div className="block" style={{backgroundImage: `linear-gradient(to bottom right, ${color1}, ${color2})`}}>
                <p>{letter}</p>
            </div>
            <p>{title}</p>
        </div>
    )
}