import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

// var Handler = React.createClass({
//   componentDidMount: function() {
//     document.title = "Amazing Page";
//   }
// });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
