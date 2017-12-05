import React, { Component } from 'react';
import image from '../assets/img/painted-lady-1568926_960_720.jpg';

class SectionOne extends Component {
  render() {
    return (
      <section className="section-one">
        <div className="main-panel">
          <div className="title">
            <h1>Dexter Amper</h1>
          </div>
          <div className="blurb">
            <p>
              I am passionate about technologies and eager to learn what's new. Developing a software and design is another way of thinking to express using digital visual.
            </p>
          </div>
          <div className="image">
          </div>
          <div className="section-number">
            01
          </div>
        </div>
      </section>
    );
  }
}

export default SectionOne;
