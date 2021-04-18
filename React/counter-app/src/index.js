import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; //dist is distributable
//this is how we import bootstrap.css in the application
import Counter from './components/counter';
import Counters from './components/counters';
//counter is a default export so we dont need curly braces around it
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App />, //Here we are rendering the counter component
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
