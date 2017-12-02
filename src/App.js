import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    );
  }
}

export default App;
