import React from 'react'
import Navbar from './Navbar';
import "../styles/section01.css";

function Section01Container() {
  return (
    <div id='firstSectionMainContainer'>
                        <Navbar />
                    <div id="heroSection">
                        <div className="contentContainer">
                            <div className="moto">
                                <h2>Track Movies and Shows you’ve watched.</h2>
                                <h2>Save those you want to see.</h2>
                                <h2>Tell your friends what’s good.</h2>
                            </div>
                            <button id="getStartedBtn">Get Started It's free</button>
                            <p>A social Network for cinephile</p>
                        </div>
                    </div>
                </div>
  )
}

export default Section01Container