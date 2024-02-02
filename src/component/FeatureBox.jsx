import React, { useState } from 'react';
import "../styles/featureBox.css";

function FeatureBox(props) {
    let boxClass;

    if (props.box === "1") {
        boxClass = 'greenBox';
    } else if (props.box === "2") {
        boxClass = 'orangeBox';
    } else if (props.box === "3"){
        boxClass = 'blueBox';
    }

    return (
        <div
            className={`featureBox ${boxClass}`}
        >
            <i className='material-icons feature-icon' style={{ fontSize: 40 }}>{props.icon}</i>
            <p>{props.text}</p>
        </div>
    );
}

export default FeatureBox;
