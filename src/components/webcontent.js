import React, { Component } from 'react';
import dedenne from '../../src/assets/dedenne.jpeg';
import aboutme from "../assets/aboutme.png";
import education from "../assets/education.png";
import projects from "../assets/projects.png";
import skills from "../assets/skills.png";
import experience from "../assets/experience.png";
import contactme from "../assets/contactme.png";
import random from "../assets/random.png";
import { Link } from "react-router-dom";

class Webcontent extends Component {
    render() {
        return (
            <div>
                <img src={dedenne} className="iconWebContent" alt="dedenneIcon"/>
                <div className="searchbar ubuntu-regular">
                    Mariane Christene Arcilla | Junior Software Engineer | Magna Cum Laude Graduate from UST
                </div>

                {/*ROW1*/}
                <div className="IconsSet">
                    <Link to={'/aboutme'} className="iconItem">
                        <div className="circle dot">
                            <img src={aboutme} className="circleIcon" alt="About Me"/>
                        </div>
                        <p className="ubuntu-regular">About me</p>
                    </Link>
                    <Link to={'/education'} className="iconItem">
                        <div className="circle dot">
                            <img src={education} className="circleIcon" alt="Education"/>
                        </div>
                        <p className="ubuntu-regular">Education</p>
                    </Link>
                    <Link to={'/projects'} className="iconItem">
                        <div className="circle dot">
                            <img src={projects} className="circleIcon" alt="Projects"/>
                        </div>
                        <p className="ubuntu-regular">Projects</p>
                    </Link>
                    <Link to={'/skills'} className="iconItem">
                        <div className="circle dot">
                            <img src={skills} className="circleIcon" alt="Skills"/>
                        </div>
                        <p className="ubuntu-regular">Skills</p>
                    </Link>
                </div>
                {/*ROW2*/}
                <div className="IconsSet">
                    <Link to={'/experience'} className="iconItem">
                        <div className="circle dot">
                            <img src={experience} className="circleIcon" alt="Experience"/>
                        </div>
                        <p className="ubuntu-regular">Experience</p>
                    </Link>
                    <Link to={'/contactme'} className="iconItem">
                        <div className="circle dot">
                            <img src={contactme} className="circleIcon" alt="Contact Me"/>
                        </div>
                        <p className="ubuntu-regular">Contact Me</p>
                    </Link>
                    <Link to={'/random'} className="iconItem">
                        <div className="circle dot">
                            <img src={random} className="circleIcon" alt="Random"/>
                        </div>
                        <p className="circleText ubuntu-regular">Random</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Webcontent;
