import React, { Component } from 'react';
import ModalEmailComponent from './ModalEmailComponent';

class SocialComponent extends Component {
  render() {
    return (
      <div>
            <ul>
              <li className="social--item">
                <a href="https://github.com/dextreeamper" target="_blank"><i className="github square icon"></i></a>
              </li>
              <li className="social--item">
                <a href="https://www.facebook.com/dextreeamper" target="_blank"><i classNames="facebook icon"></i></a>
              </li>
              <li className="social--item">
                <a href="https://www.linkedin.com/in/dexteramper/" target="_blank"><i className="linkedin plus icon"></i></a>
              </li>
              <li className="social--item">
                <a href="https://www.instagram.com/dextreeamper/" target="_blank"><i className="instagram square icon"></i></a>
              </li>
              <li className="social--item">
                {/* <ModalEmailComponent /> */}
                <a href="mailto:dextreeamper@email.com"><i className="mail icon"></i></a>
              </li>
            </ul>
      </div>
    );
  }
}

export default SocialComponent;
