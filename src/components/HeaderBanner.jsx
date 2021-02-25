import React from 'react';

import bgImg from '../assets/img/banner.webp';

import './css/HeaderBanner.css';

const HeaderDesktop = () => {
    return (
        <div className="banner-desktop">
            <img src={bgImg} alt="Школа мужских стрижек" />
        </div>
    );
 }
    
export default HeaderDesktop;