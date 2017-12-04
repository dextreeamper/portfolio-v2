import React, { Component } from 'react';
import projectOne from '../assets/img/project-one.jpg';
import projectTwo from '../assets/img/basin.jpg';
import projectThree from '../assets/img/houston.jpg';

class ProjectItem extends Component {
  render() {
    return (
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
    );
  }
}

export default ProjectItem;
