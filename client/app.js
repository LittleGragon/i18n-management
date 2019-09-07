import React from 'react';
import ReactDom from 'react-dom';
import Table from './Table';

const render = () => {
  const root = document.getElementById('app');
  ReactDom.render(Table, root)
}

render();