// src/pages/Errorpage.js
import React, { Component } from 'react';
import dedenne from "../../src/assets/dedenne.gif";
import Navbarweb from "./navbarweb";

class Errorpage extends Component {
    render() {
        return (
            <>
                <Navbarweb currentPath="*" />
                <div className="error-container">
                    <img src={dedenne} className="dedenneGif" alt="Dedenne Gif" />
                    <h1 className="ubuntu-bold errorTitle">Error 404</h1>
                    <h7 className="ubuntu-regular errorDescription">
                        Sorry, the page you are looking for does not exist.
                    </h7>
                </div>
            </>

        );
    }
}

export default Errorpage;
