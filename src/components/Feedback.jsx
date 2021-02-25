import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import MaskedInput from 'react-text-mask'

import './css/Feedback.css';

import AnimationOnScroll from 'react-animate-on-scroll';

function sendEmail(e) {
  e.preventDefault();
  
  emailjs.sendForm('service_v28kalc', 'contact_form', e.target, 'user_ynRC3cNP80c1mEHhrsvcp')
    .then((result) => {
        alert('Спасибо за заявку, скоро мы с вами свяжемся :)');
    }, (error) => {
        alert('Произошла ошибка, попробуйте заного :(');
    });
    return true;
}

class Feedback extends Component {
      render () {
        return (
          <AnimationOnScroll animateIn="animate__fadeInUp">

          <div className="feedback-form">
          
              <form onSubmit={sendEmail}>
                  <h3 className="form-title">Запишитесь прямо сейчас</h3>
                  <input type="hidden" name="contact_number" />
                  <input 
                  className="form-item" 
                  type="text" 
                  placeholder="Имя" 
                  maxLength="256"
                  name="user_name"
                  required
                  />

                  <MaskedInput
                  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
                  className="form-item" 
                  type="tel" 
                  placeholder="Телефон" 
                  maxLength="256"
                  name="user_tel"
                  required
                  />

                  <input 
                  className="form-item" 
                  type="email" 
                  placeholder="Почта" 
                  maxLength="256"
                  name="user_email"
                  required
                  />
                  
                  <textarea 
                  className="form-item" 
                  placeholder="Коментарий" 
                  maxLength="512"
                  name="message"
                  />
                  <button className="form-submit" type="submit">Отправить</button>
              </form>
          </div>
          </AnimationOnScroll>

        );
    }
 }
 
    
export default Feedback;