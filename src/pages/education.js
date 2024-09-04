import React, { Component } from 'react';
import Navbarweb from "../components/navbarweb";
import gradPic from "../assets/gradpic.jpg";

class Education extends Component {
    render() {
        return (
            <>
                <Navbarweb currentPath="/education" />
                {/* Content for the Education page */}
                <div className="container mt-3 ubuntu-regular">
                    <h1 className={"ubuntu-bold"}>Education Page</h1>
                    <div className="row aboutMeLayout">
                        <div className="col">
                            <p className='aboutMeDesc'>
                                <b className={"ubuntu-bold"}>UNIVERSITY OF SANTO TOMAS, MANILA</b> <br/>
                                Bachelor of Science in Information Technology<br/>
                                Major in Web and Mobile Development<br/>
                                Magna Cum Laude
                            </p>
                        </div>
                        <div className="col">
                            <p className='yearDesc'>
                               <em>Aug 2020 - June 2024</em>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Education;
