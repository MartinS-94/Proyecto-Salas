import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/js/bootstrap.bundle.min';


const firebaseConfig = {
  apiKey: "AIzaSyBZYvBpysPT-amQ-X8ChmecfcFkcwM5VfY",
  authDomain: "martin-e-commerce-e6acf.firebaseapp.com",
  projectId: "martin-e-commerce-e6acf",
  storageBucket: "martin-e-commerce-e6acf.appspot.com",
  messagingSenderId: "752824104627",
  appId: "1:752824104627:web:c8076b172550eac71be2c6"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
