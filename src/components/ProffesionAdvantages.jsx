import React from 'react';

import CountUp from 'react-countup';

import './css/ProffesionAdvantages.css';

import AnimationOnScroll from 'react-animate-on-scroll';


const ProffesionAdvantages = () => {
return (
    <div className="content">
    <h2>
        Проффесия барбер актульна всегда
    </h2>

    <div className="average-count">
        <div className="block-1">
        <h3 className="payment"><CountUp 
                                start={49800}
                                end={50000}
                                duration={5} />₽</h3>
        <div>
            Средняя зарплата 
            <br />
            барберов по России
        </div>
        </div>
        <div className="block-1">
        <h3 className="payment">><CountUp 
                                start={50}
                                end={60}
                                duration={5} /> тыс</h3>
        <div>
            Салонов и барбер-шопов
            <br />
            сейчас ищут специалиста
        </div>
        </div>
        <div className="block-1">
        <h3 className="payment">><CountUp 
                                start={0}
                                end={4}
                                duration={5} /> млн</h3>
        <div>
            Ежедневно пользуются
            <br />
            Услугами барбера
        </div>
        </div>
    </div>
    <div>
    <div className="advantages-row">
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="proffesion-title">
            Высокая востребованность на рынке труда
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="proffesion-comment">
            1
        </div>
        </AnimationOnScroll>
    </div>
    <div class="advantages-row">
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="proffesion-title">
            Способность реализовать свой творческий потенциал
        </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="proffesion-comment">
            2
        </div>
        </AnimationOnScroll>
    </div>
    <div class="advantages-row">
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="proffesion-title">
            Постоянное профессиональное развитие
        </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="proffesion-comment">
            3
        </div>
        </AnimationOnScroll>

    </div>
    </div>
    </div>
);
}

export default ProffesionAdvantages;
