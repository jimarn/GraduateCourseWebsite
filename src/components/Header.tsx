import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
    return (
        <header className="Header">
            <div>
                <h1 className="Header-title">Latest Prosthodontic Restorations using CAD/CAM</h1>
                <p className="Header-subtitle">Graduate Course Reading Materials</p>
            </div>
        </header>
    );
};
