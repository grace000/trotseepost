import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Homepage from "../src/views/Homepage"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
