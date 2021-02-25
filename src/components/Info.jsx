import React from 'react';

import './css/Info.css';

import AnimationOnScroll from 'react-animate-on-scroll';

const Info = () => {
    return (
        <div class="content-info">
            <div className="info-text">
                    <h4 className="info-heading">Хотите сразу посложнее?</h4>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <p className="info-main">Преподаватель подберет к каждому индивидуальный подход и любой курс окажется вам по силам!</p>
                </AnimationOnScroll>
            </div>
        </div>
    );
 }
    
export default Info;