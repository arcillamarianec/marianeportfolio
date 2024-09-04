import React, { Component } from 'react';
import Navbarweb from "../components/navbarweb";

class ContactMe extends Component {
    render() {
        return (
            <>
                <Navbarweb currentPath="/contactme" />
                <div className="container mt-3 ubuntu-regular">
                    <h1 className={"ubuntu-bold"}>Contact Me</h1>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card contactMeCard odd">
                                <div className="card-body">
                                    <h5 className="card-title">Phone Number</h5>
                                    <p className="card-text">0995 207 1692</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card contactMeCard even">
                                <div className="card-body">
                                    <h5 className="card-title ubuntu-bold">Email Address</h5>
                                    <p className="card-text">mcjarcilla@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card contactMeCard odd">
                                <div className="card-body">
                                    <h5 className="card-title">LinkedIn Account</h5>
                                    <p className="card-text"><a href="https://linkedin.com/in/arcillamarianec" target="_blank" rel="noopener noreferrer">arcillamarianec</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card contactMeCard even">
                                <div className="card-body">
                                    <h5 className="card-title">GitHub Account</h5>
                                    <p className="card-text"><a href="https://github.com/arcillamarianec" target="_blank" rel="noopener noreferrer">arcillamarianec</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactMe;
