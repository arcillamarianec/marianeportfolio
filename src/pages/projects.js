import React, { Component } from 'react';
import Navbarweb from "../components/navbarweb";
import Card from "../components/card";
import pic1 from "../assets/projects/1.png";
import pic2 from "../assets/projects/2.png";
import pic2b from "../assets/projects/2.2.png";
import pic3 from "../assets/projects/3.png";
import pic4 from "../assets/projects/4.png";
import pic5 from "../assets/projects/5.png";

const cardData = [
    {
        title: "POKÉMON: POKÉDEX AND QUIZ WEBSITE",
        text: "Front-end Developer",
        desc1: "Made mockups using Figma and acquired design inspirations for the development of the website.",
        desc2: "Utilized Vue.js as the framework; HTML, CSS, JavaScript, and Bootstrap for making the layouts.",
        desc3: "Used various JavaScript libraries such as SweetAlerts, GreenSock Animation Platform (GSAP), Lenis, and Animate.CSS.",
        imageSrc: pic1,
        buttonLink: "https://github.com/arcillamarianec/Vue_PokedexAndQuiz"
    },
    {
        title: "SPEAK-ASSIST: A WEB AND MOBILE APPLICATION THAT HELPS INDIVIDUALS WITH AUDITORY AND SPEECH IMPAIRMENTS TO COMMUNICATE WITH OTHER PEOPLE THROUGH THE USE OF ARTIFICIAL INTELLIGENCE (AI)",
        text: "Front-end Developer",
        desc1: "Directed the front-end development of both the mobile application and promotional website.",
        desc2: "Utilized HTML, CSS, and JavaScript to construct the website design.",
        desc3: "Developed the mobile application using the Flutter framework.",
        imageSrc: pic2,
        buttonLink: "https://github.com/arcillamarianec/SpeakAssist"
    },
    {
        title: "POINT OF SALES/INVENTORY SYSTEM FOR MR. BOY SPECIALTEA PAOMBONG BULACAN",
        text: "System Analyst & Front-end Developer",
        desc1: "Took charge of Front-End Development for the website, employing HTML, CSS, JavaScript, and Bootstrap.",
        desc2: "Acted as the System Analyst overseeing user and system diagrams, and led all Development teams involved in the project.",
        imageSrc: pic3,
    },
    {
        title: "SIRIB: A NATIONALISTIC QUIZ APPLICATION FOR THE FILIPINO YOUTH",
        text: "Full Stack Developer",
        desc1: "Solely conducted back-end development for the quiz section of the mobile application using Java.",
        desc2: "Led Front-End Development and managed all error corrections and redesigning efforts for the application.",
        desc3: "",
        imageSrc: pic3,
        buttonLink: "https://github.com/arcillamarianec/SpeakAssist"
    },
    {
        title: "SCOOPWORTH NEWS",
        text: "Full Stack Developer",
        desc1: "Directed and guided the entire team in coding the website.",
        desc2: "Addressed issues that my groupmates were unable to resolve.",
        desc3: "Solely developed the backend of the website, including the integration with PhpMyAdmin.",
        imageSrc: pic5,
        buttonLink: "https://github.com/arcillamarianec/ScoopworthNews"
    },
    {
        title: "JUST JAVA",
        text: "Front-end Developer",
        desc1: "Developed the website's frontend and resolved various errors encountered on that side.",
        imageSrc: pic4,
        buttonLink: "https://github.com/arcillamarianec/JustJava"
    }
];

class Projects extends Component {
    render() {
        return (
            <div>
                <Navbarweb currentPath="/projects" />
                <div className="container mt-3 ubuntu-regular">
                    <h1 className={"ubuntu-bold"}>Projects</h1>
                    <div className="row">
                        {cardData.map((card, index) => (
                            <div className="col-lg-6 col-md-4 mb-4" key={index}>
                                <Card
                                    title={card.title}
                                    text={card.text}
                                    desc1={card.desc1}
                                    desc2={card.desc2}
                                    desc3={card.desc3}
                                    imageSrc={card.imageSrc}
                                    buttonLink={card.buttonLink}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
