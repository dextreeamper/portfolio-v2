import React, { Component } from 'react';

class SocialComponent extends Component {
  render() {
    return (
            <ul>
              <li className="social--item">
                <a href="https://github.com/dextreeamper" target="_blank"><i class="github square icon"></i></a>
              </li>
              <li className="social--item">
                <a href="https://www.facebook.com/dextreeamper" target="_blank"><i class="facebook icon"></i></a>
              </li>
              <li className="social--item">
                <a href="https://www.linkedin.com/in/dexteramper/" target="_blank"><i class="linkedin plus icon"></i></a>
              </li>
              <li className="social--item">
                <a href="https://www.instagram.com/dextreeamper/" target="_blank"><i class="instagram square icon"></i></a>
              </li>
            </ul>
    );
  }
}

export default SocialComponent;
