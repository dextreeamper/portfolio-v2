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
              Dexter specializes in making things for human people. By day he crafts digital interfaces at Google. By night he educates others through video, audio, and the written word.
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
