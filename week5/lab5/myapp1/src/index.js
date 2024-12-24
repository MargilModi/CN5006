import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GreetingElement from './mygreetingapp';
import GreetingElementwithprop from './mygreetingapp';
import Appcolor from './appchange';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appcolor heading="This is first element" lb1="Name :" color="blue" />
    <Appcolor heading="This is second element" lbl="Name :"  color="green"/> 
    <Appcolor heading="This is third third element" lbl="Name :"  color="Yellow"/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
