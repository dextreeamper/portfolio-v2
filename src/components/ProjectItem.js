import React, { Component } from 'react';
import projectOne from '../assets/img/project-one.jpg';
import projectTwo from '../assets/img/basin.jpg';
import projectThree from '../assets/img/houston.jpg';
import { Grid , Segment } from 'semantic-ui-react';

class ProjectItem extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="item">
          <div className="project--image even">
            <img src={projectOne} />
          </div>
          <div className="project--content even">
            <p className="project--title"><strong>Project A</strong></p>
            <p>The quick brown fox jumps over the lazy dog at the bank of the river.</p>
          </div>
        </div>
        <div className="item">
          <div className="project--image odd">
            <img src={projectOne} />
          </div>
          <div className="project--content odd">
            <p className="project--title"><strong>Project B</strong></p>
            <p>The quick brown fox jumps over the lazy dog at the bank of the river.</p>
          </div>
        </div>
        <div className="item">
          <div className="project--image even">
            <img src={projectOne} />
          </div>
          <div className="project--content even">
            <p className="project--title"><strong>Project C</strong></p>
            <p>The quick brown fox jumps over the lazy dog at the bank of the river.</p>
          </div>
        </div>
        <div className="item">
          <div className="project--image odd">
            <img src={projectOne} />
          </div>
          <div className="project--content odd">
            <p className="project--title"><strong>Project D</strong></p>
            <p>The quick brown fox jumps over the lazy dog at the bank of the river.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
