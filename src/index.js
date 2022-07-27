import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {Robots} from './Robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card id={Robots[0].id} name={Robots[0].name} email={Robots[0].email}/>
      <Card id={Robots[1].id} name={Robots[1].name} email={Robots[1].email}/>
      <Card id={Robots[2].id} name={Robots[2].name} email={Robots[2].email}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
