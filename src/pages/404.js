import React from 'react';
import '../assets/css/style.css';

const NotFound = () => {
    return (
        <div className="container">
            <div className="content">
                <h1 className="heading-404">404 - Page Not Found</h1>
                <p className="text">
                    Oops! The page you are looking for might be in <i>somewhere else</i>.
                </p>
                <a href="/" className="link">
                    Go Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
