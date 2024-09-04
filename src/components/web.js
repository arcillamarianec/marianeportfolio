import React from 'react';
import left from '../../src/assets/left.png'
import right from '../../src/assets/right.png'
import reload from '../../src/assets/reload.png'
import home from '../../src/assets/home.png'
import star from '../../src/assets/star.png'
import Webcontent from "./webcontent";
import Swal from "sweetalert2";
import {Outlet} from "react-router-dom";

function Web() {
    return (
        <div>
            <section className="body">
                <div className="webheader">
                    <img src={star} className="icon5 ubuntu-regular"/>
                    Yan's Web
                </div>
                <section className="weburl">
                    <div className="navIcons">
                        <img src={left} className="navIcons icon1"/>
                        <img src={right} className="navIcons icon2"/>
                        <img src={reload} className="navIcons icon3"/>
                        <img src={home} className="navIcons icon4"/>
                    </div>
                    <div className='urlBox ubuntu-regular'>
                        https://www.yansweb.com
                    </div>
                </section>
                <div className="webbody">
                    <center>
                        <Outlet/>
                        {/*<Webcontent/>*/}
                    </center>
                </div>
            </section>
        </div>
    );
}

export default Web;