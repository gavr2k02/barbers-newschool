import React from 'react';

import laptop from '../assets/img/laptop.png';
import people from '../assets/img/people.png';

import AnimationOnScroll from 'react-animate-on-scroll';

import './css/Learn.css';

const Learn = () => {
    return (
        <div>
            <h2>Обучение</h2>
            <div className="learn-block">
                <div className="block-3">
                    <div className="block-text">
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <img src={laptop} className="icon" alt="ноутбук" />
                        <h4 className="text-title" id="titlelearn">Онлайн</h4>
                        <p>Обучение по видеосвязи<br/> с преподователем (практика по видеосвязи)</p>
                    </AnimationOnScroll>
                    </div>
                </div>
                <div className="block-3">
                    <div className="block-text">
                        <AnimationOnScroll animateIn="animate__fadeInRight">
                            <img className="icon" src={people} alt="люди" />
                            <h4 className="text-title" id="titlelearn">Оффлайн</h4>
                            <p>Обучение в городе Белгород,<br/> в салоне Beauty Художник</p>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
 }
    
export default Learn;