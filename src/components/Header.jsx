import React from 'react';

import './css/Header.css'

const Header = () => {
return (
<div className="navbar-desktop">
    <div className="nav-container">
        <div className="logos">
            <h1>BARBERS SCHOOL</h1>
        </div>
            <nav role="navigation" className="nav-menu">
                <a href="#courses-link" className="menu-point">КУРСЫ</a>
                <a href="#teacher-link" className="menu-point">НАСТАВНИК</a>
                <a href="#feedback-link" className="menu-point">ЗАПИСАТЬСЯ</a>
            </nav>
    </div>
</div>
);
}

export default Header;