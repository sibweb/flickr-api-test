import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { polyfill } from 'es6-promise'; polyfill();

ReactDOM.render(<App />, document.getElementById('root'));
