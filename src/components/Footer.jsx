import React from 'react';

import vkHeic from '../assets/img/vk.png';
import instHeic from '../assets/img/inst.png';
import waHeic from '../assets/img/wa.png';
import mailHaic from '../assets/img/mail.png';
import telHaic from '../assets/img/tel.png';

import './css/Footer.css';

const Footer = () => {
    return (
        <div className="fotter-container">
            <div className="footer-menu">
                <a href="tel:+79205518182"><img className="footer-img" src={waHeic}/></a>
                <a href="https://www.instagram.com/gavrilina___/"><img className="footer-img" src={instHeic}/></a>
                <a href="https://vk.com/tatianagavrilina"><img className="footer-img" src={vkHeic}/></a>
                <a href="https://vk.com/feed"><img className="footer-img" src={telHaic}/></a>
                <a href="mailto:gavrilin22@mail.ru"><img className="footer-img" src={mailHaic}/></a>
            </div>
        </div>
    );
 }
    
export default Footer;