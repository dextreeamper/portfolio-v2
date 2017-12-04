import React, { Component } from 'react';
import projectOne from '../assets/img/project-one.jpg';
import projectTwo from '../assets/img/basin.jpg';
import projectThree from '../assets/img/houston.jpg';

class SectionThree extends Component {
  render() {
    return (
      <section className="section-three">
        <div className="main-panel">
          <div className="title">
            <h1>Projects</h1>
          </div>
          <div className="blurb">
            <p>
              My awesome projects that inspires me to create something new.
            </p>
          </div>
          <div className="section-number">
            03
          </div>
          <div className="ui grid">
              <div class="eight wide column">
                <a href="#">
                  <img src={projectTwo} />
                  <h2>Project Title</h2>
                  <p className="description"></p>
                </a>
              </div>
              <div class="eight wide column">
                <a href="#">
                  <img src={projectTwo} />
                  <h2>Project Title</h2>
                  <p className="description"></p>
                </a>
              </div>
              <div class="eight wide column">
                <a href="#">
                  <img src={projectTwo} />
                  <h2>Project Title</h2>
                  <p className="description"></p>
                </a>
              </div>
              <div class="eight wide column">
                <a href="#">
                  <img src={projectTwo} />
                  <h2>Project Title</h2>
                  <p className="description"></p>
                </a>
              </div>
              <div class="eight wide column">
                <a href="#">
                  <img src={projectTwo} />
                  <h2>Project Title</h2>
                  <p className="description"></p>
                </a>
              </div>
              <div class="eight wide column">
                <a href="#">
                  <img src={projectTwo} />
                  <h2>Project Title</h2>
                  <p className="description"></p>
                </a>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionThree;