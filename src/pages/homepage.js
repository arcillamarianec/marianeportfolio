import React, { Component } from 'react';
import chrome from '../../src/assets/chrome.png';
import notes from '../../src/assets/notes.png';
import vs from '../../src/assets/vs.png';
import github from '../../src/assets/github.png';
import more from '../../src/assets/more.png';
import Web from "../components/web";

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <section className="layout">
                    <div className="header ubuntu-regular">
                        Mariane's Portfolio
                    </div>
                    <div className="sidebar">
                        <div className='icons'>
                            <img src={chrome} className="sidebarIcon" alt="Chrome Icon"/>
                            <img src={notes} className="sidebarIcon" alt="Notes Icon"/>
                            <img src={vs} className="sidebarIcon" alt="VS Code Icon"/>
                            <img src={github} className="sidebarIcon" alt="GitHub Icon"/>
                        </div>
                        <img src={more} className="moreIcon" alt="More Icon"/>
                    </div>
                    <div className="b">
                        <Web/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Homepage;
