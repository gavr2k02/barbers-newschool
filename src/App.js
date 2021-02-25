import React, { Component } from 'react';

import "animate.css/animate.min.css";

import "./App.css";

import { Header, HeaderBanner, ProffesionAdvantages, Level, Info, Courses, Learn, Teacher, Feedback, Footer } from './components';



class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <HeaderBanner />
      <div className="section">
        <ProffesionAdvantages />
      </div>
      <div className="section">
        <Level />
      </div>
      <Info />
      
      <div className="section" id="bgblack">
        <Courses />
      </div>
      <div className="section" id="bgyellow">
        <Learn />
      </div>
      <div className="section">
        <Teacher />
      </div>
      <div className="section" id="bgyellow">
        <Feedback />
      </div>
      <div className="section" id="bgblack">
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;