import React, {useState} from 'react';

import { FaPaperPlane, FaAngleRight, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import HeaderItem from '../../components/HeaderItem';

import './index.css';

const validator = require('email-validator');

const cardTextIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum tortor mi, sed egestas velit cursus at. Phasellus convallis turpis eu arcu egestas commodo.";

export default function Home(){
    const [email, setEmail] = useState('');

    function handleNotify(e){
        e.preventDefault();

        if (validator.validate(email)!== true) {
            alert("Invalid e-mail :( ");
            setEmail('');
        }else {
            alert("Success :)");
            setEmail('');
        }
    }

    return (
        <div className="mainContainer">
            <div className="emailContainer">

                <p className="headerEmailContainer"> DO YOU EVER WORRY ABOUT </p>

                <div className="mainTextEmailContainer"> 
                    <p> We are going to launch </p>
                    <p> things taht <b>helps</b> to improve...</p>
                </div>

                <form onSubmit={handleNotify} className="formEmailContainer">
                    <input 
                        placeholder="Your email address" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    <button type="submit"> Notify <FaPaperPlane className="emailIcon"/> </button>
                </form>

            </div>
            <div className="cardsContainer"> 
                <div className="carouselContainer">
                    <div className="card">

                        <HeaderItem letter="A" title="Atica" color1="#0d7ee8" color2="#aad6ff"/>
                        
                        <div className="cardText">
                            <p>{cardTextIpsum}</p>
                        </div>
                        <a className="detailButton"> details <FaAngleRight className="buttonDetails" /></a>
                    
                    </div>
                    <div className="card">
                        
                    <HeaderItem letter="C" title="Citica" color1="#f78e25" color2="#ffa851"/>

                        <div className="cardText">
                            <p>{cardTextIpsum}</p>
                        </div>
                        <a className="detailButton"> details <FaAngleRight className="buttonDetails" /></a>
                    </div>
                </div>
                <div className="btnContainer">
                    <div className="btnNavCarousel"> <FaArrowLeft/></div>
                    <div className="btnNavCarousel"> <FaArrowRight/></div>
                </div>
            </div>
        </div>
    )
}