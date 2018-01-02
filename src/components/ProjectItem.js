import React, { Component } from 'react';
import projectOne from '../assets/img/project-one.jpg';
import sam from '../assets/img/project-sam.png';
import singlecell from '../assets/img/project-singlecell.png';
import shapeyourmind from '../assets/img/project-shapeyourmind.png';
import userprofile from '../assets/img/project-userprofile.png';
import booky from '../assets/img/project-bookyph.png';
import { Grid , Segment } from 'semantic-ui-react';

class ProjectItem extends Component {
  render() {
    return (
      <div className="project-container">
        <a href="https://github.com/dextreeamper/browser-software.git">
          <div className="item">
            <div className="project--image even">
              <img src={sam} />
            </div>
            <div className="project--content even">
              <p className="project--title"><strong>Sam Browse A Software</strong></p>
              <p>A browsing software platform that allows you to search any software for your business.</p>
            </div>
          </div>
        </a>
        <a href="http://singlecell.com.au/">
          <div className="item">
            <div className="project--image odd">
              <img src={singlecell} />
            </div>
            <div className="project--content odd">
              <p className="project--title"><strong>Serice Based Platform</strong></p>
              <p>An IT Consulting company with a service based platform that aligns with client’s process.</p>
            </div>
          </div>
        </a>
        <a href="http://ph.phonebooky.com/">
          <div className="item">
            <div className="project--image even">
              <img src={booky} />
            </div>
            <div className="project--content even">
              <p className="project--title"><strong>Booky Restaurant</strong></p>
              <p>Discover restaurants & save money.</p>
            </div>
          </div>
        </a>
        <a href="https://github.com/dextreeamper/user-profile-react.git">
          <div className="item">
            <div className="project--image odd">
              <img src={userprofile} />
            </div>
            <div className="project--content odd">
              <p className="project--title"><strong>Simple User Profile</strong></p>
              <p>A simple user profile layout using React and Redux with github user profile design.
              </p>
            </div>
          </div>
        </a>
        <a href="http://shapeyourmind.com.au/">
          <div className="item">
            <div className="project--image even">
              <img src={shapeyourmind} />
            </div>
            <div className="project--content even">
              <p className="project--title"><strong>Shapeyourmind</strong></p>
              <p>A simple viewing website for Dietitian with a booking consultation functionality.</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default ProjectItem;
