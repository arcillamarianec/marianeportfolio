import React from 'react';
import { FaPhp, FaPython, FaJava, FaDatabase, FaHtml5, FaCss3, FaJs, FaVuejs, FaLaravel, FaServer } from 'react-icons/fa';
import dart from "../../src/assets/dart.svg";
import flutter from "../../src/assets/flutter.svg";

const iconMap = {
    'Php': <FaPhp />,
    'Python': <FaPython />,
    'Java': <FaJava />,
    'Dart': <img src={dart} alt="Dart" style={{ width: '2rem', height: 'auto' }} />,
    'PostgreSQL': <FaDatabase />,
    'HTML/CSS': (
        <>
            <FaHtml5 />
            <FaCss3 />
        </>
    ),
    'MySQL': <FaDatabase />,
    'JavaScript': <FaJs />,
    'Vue.js': <FaVuejs />,
    'Flutter': <img src={flutter} alt="Flutter" style={{ width: '2rem', height: 'auto' }} />,
    'Laravel': <FaLaravel />,
    'Spring Boot': <FaServer />
};

const Card2 = ({ title }) => {
    return (
        <div className="col-lg-2 col-md-6 mb-4">
            <div className="card">
                <div className="card-body text-center">
                    <div style={{ fontSize: '3rem' }}>
                        {iconMap[title] || <FaServer />}
                    </div>
                    <h5 className="card-title mt-2 text-center">{title}</h5>
                </div>
            </div>
        </div>
    );
};

export default Card2;
