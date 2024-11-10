import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SigIn from './SigIn';
import Oyente from './oyente';

const MainRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/SigIn" element={<SigIn />} /> 
      <Route path='/oyente' element={<Oyente />} />

    </Routes>
  </Router>
);

export default MainRouter;
