import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbarweb = ({ currentPath }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'}><a className="navbar-brand ubuntu-bold" href="#">Yan's Web</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="ubuntu-regular navbar-nav ">
                    <NavLink
                        to="/home"
                        className={`nav-item nav-link ${currentPath === '/home' ? 'active' : ''}`}
                        exact
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/aboutme"
                        className={`nav-item nav-link ${currentPath === '/aboutme' ? 'active' : ''}`}
                        exact
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        to="/education"
                        className={`nav-item nav-link ${currentPath === '/education' ? 'active' : ''}`}
                        exact
                    >
                        Education
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={`nav-item nav-link ${currentPath === '/projects' ? 'active' : ''}`}
                        exact
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className={`nav-item nav-link ${currentPath === '/skills' ? 'active' : ''}`}
                        exact
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to="/experience"
                        className={`nav-item nav-link ${currentPath === '/experience' ? 'active' : ''}`}
                        exact
                    >
                        Experience
                    </NavLink>
                    <NavLink
                        to="/contactme"
                        className={`nav-item nav-link ${currentPath === '/contactme' ? 'active' : ''}`}
                        exact
                    >
                        Contact Me
                    </NavLink>
                    <NavLink
                        to="/random"
                        className={`nav-item nav-link disabled ${currentPath === '/random' ? 'active' : ''}`}
                        exact
                    >
                        Random
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbarweb;
