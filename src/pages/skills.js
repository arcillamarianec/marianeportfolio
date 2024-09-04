import React, { Component } from 'react';
import Navbarweb from "../components/navbarweb";
import Card2 from "../components/card2"; // Ensure this path is correct

class Skills extends Component {
    render() {
        const technologies = [
            'Php', 'Python', 'Java', 'Dart', 'MySQL', 'PostgreSQL',
            'HTML/CSS', 'JavaScript', 'Vue.js', 'Flutter', 'Laravel', 'Spring Boot'
        ];

        return (
            <>
                <Navbarweb currentPath="/skills" />
                <div className="container mt-3">
                    <h1 className={"ubuntu-regular"}>Technologies</h1>
                    <div className="row">
                        {technologies.map((tech, index) => (
                            <Card2 key={index} title={tech} />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Skills;
