import React, { Component } from 'react';
import SocialComponent from './SocialComponent';

class SectionFour extends Component {
  render() {
    return (
      <section className="section-four">
        <div className="main-panel">
          <div className="title">
            <h1>Social</h1>
          </div>
          <div className="image">
          </div>
          <div className="section-number">
            04
          </div>
          <div className="social">
            <SocialComponent />
          </div>
        </div>
      </section>
    );
  }
}

export default SectionFour;
