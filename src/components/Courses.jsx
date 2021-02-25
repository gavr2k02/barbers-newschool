import React from 'react';

import './css/Courses.css';

import AnimationOnScroll from 'react-animate-on-scroll';

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeT: false,
                      activeP: false};
    }
    render () {
        return (
            <div id="courses-link">
            <h2 id="h2-white">Курсы</h2>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <div className="courses-block">
                <div className="block-2" id="greenblock">
                    <div className="text-title-1">
                        <div id="circle-greenmin"></div>
                        <h3>КУРС: МАСТЕР ПО МУЖСКИМ СТРИЖКАМ С НУЛЯ</h3>
                        <h4 className="courses-title-2" id="greentxt">Обучение построено на практике:</h4>
                        <ul>
                            <li className="courses-list">Выполнение мужских салонных стрижек</li>
                            <li className="courses-list">Научитесь стричь максимально быстро и качественно</li>
                            <li className="courses-list">Ничего лишнего, только то что нужно и важно в работе</li>
                            <li className="courses-list">Создадим готовое портфолио работ для начала работы мастером</li>
                            <li className="courses-list">Через месяц Вы полноценный работник студии</li>
                        </ul>
                </div>
                <h4 className="courses-title-2" id="greentxt">Программа курса </h4>
                <a href="#gavr2k02" class="a-title" onClick={() => this.setState({activeT: !this.state.activeT})}>ТЕОРИТИЧЕСКИЙ БЛОК &#9660;</a>

                <div className={this.state.activeT ? 'text-block-subtext' : 'hidden'} >
                    <ul className="courses-list">
                        <li className="courses-list">Владение инструментом</li>
                        <li className="courses-list">Обработка инструментов</li>
                        <li className="courses-list">Болезни кожи головы</li>
                    </ul>
                </div>

                <a  href="#gavr2k02"class="a-title" onClick={() => this.setState({activeP: !this.state.activeP})}>ПРАКТИЧЕСКИЙ БЛОК &#9660;</a>

                <div className={this.state.activeP ? 'text-block-subtext' : 'hidden'} >
                    <ul className="courses-list">
                        <li className="courses-list">Основные зоны головы, углы оттяжек, углы срезов</li>
                        <li className="courses-list">Техника салонных стрижек</li>
                        <li className="courses-list">Актуальные современные стрижки</li>
                        <li className="courses-list">Креативное моделирование</li>
                        <li className="courses-list">Текстурирования стрижки (ножницы, бритва)</li>
                        <li className="courses-list">Варианты укладок</li>
                    </ul>
                </div>
                    <h4 className="courses-title-2" id="greentxt">Длительность курса 60 часов (3 дня в неделю по 5 часов)</h4>
                    <h4 className="courses-title-2" id="greentxt">Выдаётся сертификат</h4>
                    <h4 className="courses-title-2">Стоимость курса: 15000 ₽</h4>

                </div>
                <div className="block-2" id="yellowblock">
                    <div className="text-title-1">
                        <div id="circle-yellowmin"></div>
                        <h3>СЕМИНАР: СТИЛЬ И ФОРМА МУЖСКИХ СТРИЖЕК</h3>
                        <h4 className="courses-title-2" id="yellowtxt">Чему вы научитесь:</h4>
                        <ul className="courses-list">
                            <li className="courses-list">Углубите свои знания о мужских стрижках, увидив их по новому, научившись продумывать стрижки с точки зрения геометрии</li>
                            <li className="courses-list">Подбирать стрижку по форме головы, а также корректировать форму лица с помощью стрижки</li>
                            <li className="courses-list">Разберём базовые стрижки в комбинированных формах</li>
                            <li className="courses-list">Разберём различные приёмы текстурирования и филировки</li>
                            <li className="courses-list">Креативные методы укладки с применением стайлинга</li>
                            <li className="courses-list">Станете стричь быстрее т. к. поймёте порядок действий</li>
                            <li className="courses-list">Научимся находить подход к требовательной аудитории</li>
                        </ul>
                        <h4 className="courses-title-2" id="yellowtxt">Длительность семинара 6 часов</h4>
                        <h4 className="courses-title-2" id="yellowtxt">Выдаётся сертификат</h4>
                        <h4 className="courses-title-2">Стоимость семинара: 3000 ₽</h4>

                </div>
                </div>
                <div className="block-2" id="yellowblock">
                    <div className="text-title-1">
                        <div id="circle-yellowmin"></div>
                        <h3>СЕМИНАР: ПЛОЩАДКА И СТРИЖКИ НА ЕЁ ОСНОВЕ</h3>
                        <h4 className="courses-title-2" id="yellowtxt">Чему вы научитесь:</h4>
                        <ul className="courses-list">
                            <li className="courses-list">Стричь идеальную "Площадку" в быстрой технике за максимально короткое время</li>
                            <li className="courses-list">Узнаете историю появления</li>
                            <li className="courses-list">Преимущества и кому подходит</li>
                            <li className="courses-list">Разберём секреты создания ровной стрижки</li>
                            <li className="courses-list">Секреты создания ровной стрижки</li>
                            <li className="courses-list">Топовые зоны</li>
                            <li className="courses-list">Вариации стрижки:</li>
                                <ul className="courses-list">
                                    <li className="courses-list">Классическая</li>
                                    <li className="courses-list">Удлинённая</li>
                                    <li className="courses-list">С рисунком на висках</li>
                                </ul>
                            <li className="courses-list">Укладка</li>
                        </ul>
                        <h4 className="courses-title-2" id="yellowtxt">Длительность семинара 5 часов</h4>
                        <h4 className="courses-title-2" id="yellowtxt">Выдаётся сертификат</h4>
                        <h4 className="courses-title-2">Стоимость семинара: 3000 ₽</h4>

                    </div>
                </div>
                <div className="block-2" id="redblock">
                    <div className="text-title-1">
                        <div id="circle-redmin"></div>
                        <h3>СЕМИНАР: HAIR TATTOO</h3>
                        <h4 className="courses-title-2" id="redtxt">День полной перезагрузки:</h4>
                        <ul className="courses-list">
                            <li className="courses-list">Разберём все преимущества hair tattoo</li>
                            <li className="courses-list">Выбор рисунка, как выбрать ваш рисунок</li>
                            <li className="courses-list">Объемные hair tattoo</li>
                            <li className="courses-list">Hair tattoo в цвете</li>
                            <li className="courses-list">Правила ухода за волосами после стрижки в технике hair tattoo</li>
                        </ul>
                        <h4 className="courses-title-2" id="redtxt">Длительность семинара 8 часов</h4>
                        <h4 className="courses-title-2" id="redtxt">Выдаётся сертификат</h4>
                        <h4 className="courses-title-2">Стоимость семинара: 3500 ₽</h4>
                </div>
                </div>
            </div>
            </AnimationOnScroll>
            </div>
        );
    }
}
    
export default Courses;