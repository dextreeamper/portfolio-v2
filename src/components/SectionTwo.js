import React, { Component } from 'react';
import Skills from './Skills';

class SectionTwo extends Component {
  render() {
    return (
      <section className="section-two">
        <div className="main-panel">
          <div className="blurb">
            <p>
              Learning is not attained by chance, it must be sought for with ardor and diligence.
              -Abigail Adams
            </p>
          </div>
          <Skills />
          <div className="section-number">
            02
          </div>
          <div className="title">
            <h1>My Skills</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionTwo;
