import React, { Component } from 'react';

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
            <ul>
              <li className="social--item">
                <a href="https://github.com/dextreeamper" target="_blank"><i class="github square icon"></i></a>
              </li>
              <li className="social--item">
                <a href="https://www.facebook.com/dextreeamper" target="_blank"><i class="facebook icon"></i></a>
              </li>
              <li className="social--item">
                <a href="https://www.linkedin.com/dextreeamper/" target="_blank"><i class="linkedin plus icon"></i></a>
              </li>
              <li className="social--item">
                <a href="https://www.instagram.com/dextreeamper/" target="_blank"><i class="instagram square icon"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionFour;
