import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ExampleConsumeApi from './components/exampleConsumeApi';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
      <App />
    </Router>,
  document.getElementById("root"));