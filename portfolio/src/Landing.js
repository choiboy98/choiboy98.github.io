import React from 'react';
import daniel from './static/image/daniel.png'
import './style/landing.css'
import './index.css'

function Landing() {
  return (
    <div className="background">
        <div className="row">
            <img src={daniel} className="daniel" alt="logo" />
            <div style={{paddingRight: "25vh"}}>
                <p className="text" style={{paddingTop: "15vh",fontSize: "3vh"}}>My Name is</p>
                <p className="text" style={{fontSize: "10vh"}}>Daniel Choi</p>
                <p className="text">I am studying Computer Science at the University of Illinois at Urbana-Champaign. Currently, I am interested in Computer Security and Artificial Intelligence. I am juggling between 17 credit hours, 2 committed club activities, and an internship.</p>
            </div>
        </div>
    </div>
  );
}

export default Landing;
