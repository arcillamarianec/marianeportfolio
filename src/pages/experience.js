import React, { Component } from 'react';
import Experience from "../components/navbarweb";
import Navbarweb from "../components/navbarweb";
class Education extends Component {
    render() {
        return (
            <>
                <Navbarweb currentPath="/experience" />
                <div className="container mt-3 ubuntu-regular">
                    <h1 className={"ubuntu-bold"}>Experiences</h1>
                    <div className="row aboutMeLayout">
                        <div className="col">
                            <p className='aboutMeDesc'>
                                <b className={"ubuntu-bold"}>SOLUTIONS RESOURCE</b><br/>
                                Back-end Developer Intern<br/>
                            </p>
                            <ul className='experienceList'>
                                <li>Implemented audit trail feature to track recent user edits and timestamps for the
                                    “Youth-wise Mentoring Application” project.
                                </li>
                                <li>Created multiple organization profile endpoints with CRUD (Create, Read, Update, and
                                    Delete) functionalities.
                                </li>
                                <li>Designed MySQL queries for retrieving data from multiple tables.
                                </li>
                                <li>Developed file upload, download, and delete functionality integrated with AWS S3
                                    Bucket.
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <p className='yearDesc'>
                                <em>February 2024 - May 2024</em>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Education;
