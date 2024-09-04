import './App.css';
import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Mainlayout from "./layouts/mainlayout";
import Webcontent from "./components/webcontent";
import Aboutme from "./pages/aboutme";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Contactme from "./pages/contactme";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Errorpage from "./components/errorpage";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={"/"} element={<Mainlayout/>}>
                <Route path={"/"} index element={<Webcontent/>}/>
                <Route path={"/home"} element={<Webcontent/>}/>
                <Route path={"/aboutme"} element={<Aboutme/>}/>
                <Route path={"/education"} element={<Education/>}/>
                <Route path={"/experience"} element={<Experience/>}/>
                <Route path={"/projects"} element={<Projects/>}/>
                <Route path={"/skills"} element={<Skills/>}/>
                <Route path={"/contactme"} element={<Contactme/>}/>
                <Route path="*" element={<Errorpage/>} />
            </Route>
        )
    );
    return (
        <RouterProvider router={router}/>

    );
}

export default App;
