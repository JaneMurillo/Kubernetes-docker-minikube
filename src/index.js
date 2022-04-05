import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import './index.css';

import { Home } from './pages/home/home';

ReactDOM.render(
  <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto"
    ></link>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Amatic+SC"
    ></link>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
