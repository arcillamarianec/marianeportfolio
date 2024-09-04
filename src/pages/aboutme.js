import React, { Component } from 'react';
import gradPic from '../assets/gradpic.jpg';
import Navbarweb from "../components/navbarweb"; // Import your image

class Aboutme extends Component {
    render() {
        return (
            <>
                <Navbarweb />
                <div className="container mt-3 wavePic">
                    <h1 className={"ubuntu-bold"}>About Me</h1>
                    <div className="row aboutMeLayout">
                        <div className="col">
                            <img
                                src={gradPic}
                                alt="Profile"
                                className="profile-img"
                            />
                        </div>
                        <div className="col">
                            <h2 className={"ubuntu-bold aboutMeName"}>Mariane Christene Arcilla</h2>
                            <h3 className={"ubuntu-medium aboutMeName"}>Junior Software Engineer</h3>
                            <p className='aboutMeDesc ubuntu-light'>
                                I am passionate about software development, especially
                                in building user-friendly applications. With a strong
                                background in front-end development and a keen interest in
                                learning new technologies, I strive to create engaging and
                                efficient user experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Aboutme;
