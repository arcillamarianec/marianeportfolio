import React from 'react';

const Card = ({ title, text, desc1, desc2, desc3, buttonLink }) => {
    return (
        <div className="card cardP" style={{ width: '100%' }}>
            <div className="card-body">
                <h5 className="card-title ubuntu-bold">{title}</h5>
                <i><p className="card-text ubuntu-medium">{text}</p></i>
                <p className="card-text ubuntu-light">{desc1}</p>
                <p className="card-text ubuntu-light">{desc2}</p>
                <p className="card-text ubuntu-light">{desc3}</p>
                {buttonLink && (
                    <a href={buttonLink} className="card-link" target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
