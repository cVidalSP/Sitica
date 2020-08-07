import React from 'react';

import './index.css';
import HeaderItem from '../HeaderItem';

export default function Header(){
    return(
        <div className="mainContainer">

            <HeaderItem letter="S" title="Sitica" color1="#835afc" color2="#d77cff"/>

            <div className="menuContainer">
                <ul>
                    <li className="menuItem">
                        <a className="itemText"> Home </a>
                    </li>
                    <li className="menuItem">
                        <a className="itemText"> Products </a>
                    </li>
                    <li className="menuItem">
                        <a className="itemText"> Support </a>
                    </li>
                    <li className="menuItem">
                        <a className="itemText"> About </a>
                    </li>
                </ul>
                <div className={"btnLogin"}>
                    <p>LOGIN</p>
                </div>
            </div>
        </div>
    )
}