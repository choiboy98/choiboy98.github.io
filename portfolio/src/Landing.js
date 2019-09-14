import React, { Component } from 'react'
import daniel from './static/image/daniel.png'
import food from './static/image/food.png'
import music from './static/image/music.png'
import project from './static/image/project.png'
import resume from './static/image/resume.png'
import linkedin from './static/image/linkedin.png'
import github from './static/image/github.png'
import './style/landing.css'
import './index.css'

export default class Landing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          landing: true,
          project: false,
          music: false,
          food: false,
        }
    }

    render() {
        return (
            <div className="flip-container">
                <div className="flipper">
                    <div className="background front">
                        <div className="row">
                            <img src={daniel} className="daniel" alt="logo" />
                            <div style={{paddingRight: "25vh"}}>
                                <p className="text" style={{paddingTop: "15vh",fontSize: "3vh"}}>My Name is</p>
                                <p className="text" style={{fontSize: "10vh"}}>Daniel Choi</p>
                                <p className="text" style={{fontSize: "2vh"}}>I am studying Computer Science at the University of Illinois at Urbana-Champaign. I am experienced in Full-stack development, AI, and security. I love to code, sing, and cook!</p>
                                <a href="https://github.com/choiboy98" target="_blank">
                                    <img src={project} className="logo logo-animation" alt="logo" />
                                </a>
                                <a href="https://github.com/choiboy98" target="_blank">
                                    <img src={github} className="logo logo-animation" alt="logo" />
                                </a>
                                <a href="https://www.linkedin.com/in/choiboy98/" target="_blank">
                                <img src={linkedin} className="logo logo-animation" alt="logo" />
                                </a>
                                <a href="https://github.com/choiboy98" target="_blank">
                                <img src={resume} className="logo logo-animation" alt="logo" />
                                </a>
                                <a href="https://github.com/choiboy98" target="_blank">
                                <img src={music} className="logo logo-animation" alt="logo" />
                                </a>
                                <a href="https://github.com/choiboy98" target="_blank">
                                <img src={food} className="logo logo-animation" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}