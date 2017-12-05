import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div>
       <div className="column left--panel">
          <div className="twoColumn">
            <h3><strong>1.</strong> Programming</h3>
          </div>
          <div className="twoColumn">
            <h3><strong>2.</strong> Problem Solving</h3>
          </div>
          <div className="twoColumn">
            <h3><strong>3.</strong> Team Work</h3>
          </div>
        </div>
        <div className="column right--panel">
          <div className="twoColumn">
            <h3><strong>6.</strong> Project Development</h3>
          </div>
          <div className="twoColumn">
            <h3><strong>7.</strong> Research</h3>
          </div>
          <div className="twoColumn">
            <h3><strong>8.</strong> Visual Design</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
