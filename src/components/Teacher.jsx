import React from 'react';

import master from '../assets/img/master.webp';

import AnimationOnScroll from 'react-animate-on-scroll';

import './css/Teacher.css';

const Teacher = () => {
    return (
    <div id="teacher-link">
        <h2>Наставник</h2>
        <div className="teacher-block">
            <div className="teacher-block-img">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <img className="teacher-img" src={master} alt="Мастер Татьяна Гаврилина" />
                </AnimationOnScroll>
            </div>
            <div className="teacher-block-text">
                <AnimationOnScroll animateIn="animate__fadeInRight">
                <div className="">
                    <h3 className="teacher-title">Мастер Татьяна Гаврилина</h3>
                    <p>Привет, я  тренер с правом преподавания, имею сертификат государственного образца.</p>
                    <p>Практикующий преподаватель с опытом работы более 20 лет. </p>
                    <p>Множество повышений квалификаций у ведущих мастеров, посещаю семинары, тренинги и бьюти - конференции.</p>
                    <p>Победитель в номинации "Мужская мода" 2018 по Белгороду и Белгородской обл.</p>
                    <p>20 лет в Бьюти бизнесе наградили меня невероятным опытом, хочется делиться!</p>
                    <p>Я постоянно учусь и не хочу чтобы библиотека пылилась, отдав появляется место для новых знаний.</p>
                    <p>Создатель авторских курсов в сфере барберинга, для каждого из Вас будет индивидуальный подход и максимум внимания, хочу чтобы Вы полюбили мужские стрижки также как и я!</p>
                </div>
                </AnimationOnScroll>
            </div>
        </div>
    </div>
    );
 }
    
export default Teacher;