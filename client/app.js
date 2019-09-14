import React from 'react';
import ReactDom from 'react-dom';
import Home from './containers/home';
import 'antd/dist/antd.css';
const root = document.getElementById('app');
ReactDom.render(<Home/>, root)