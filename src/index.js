import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Router>
        <App />
        {/* <Route path ='/'component ={Home} exact/>
    <Route path ='/about' component = {About}/>
    <Route path = '/contact' component ={Contact}/> */}
    </Router>
 , document.getElementById('root'));
