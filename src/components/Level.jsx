import React from 'react';

import './css/Level.css'

import AnimationOnScroll from 'react-animate-on-scroll';

const Level = () => {
return (
<div>
    <h2>Уровень</h2>
    <div className="level-block">
        <div className="block-1">
            <AnimationOnScroll animateIn="animate__fadeIn">
                <div id="circle-green"></div>
                <div className="block-text">
                    <h4 className="text-title">Easy</h4>
                    <p>Если вы не имеете опыта,<br/> но хотите научится</p>
                </div>
            </AnimationOnScroll>
        </div>
        <div className="block-1">
        <AnimationOnScroll animateIn="animate__fadeIn">

            <div id="circle-yellow"></div>
            <div className="block-text">
                <h4 className="text-title">Middle</h4>
                <p>Если вы имеете начальные <br/> навыки для вас идеально <br/> подойдет этот курс</p>
            </div>   
            </AnimationOnScroll>     
        </div>
        <div className="block-1">
        <AnimationOnScroll animateIn="animate__fadeIn">

            <div id="circle-red"></div>
            <div className="block-text">
                <h4 className="text-title">Hard</h4>
                <p>Если вы имеете опыт<br/> и хотите изучить новые техники</p>
            </div>
            </AnimationOnScroll>
        </div>
            
    </div>
</div>
);
}

export default Level;