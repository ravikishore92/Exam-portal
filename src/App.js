

import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SubmitPage from './SubmitPage';
import Result from './Result';
import AfterSubmit from './AfterSubmit';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubmitPage />} />
        <Route path="/AfterSubmit" element={<AfterSubmit />} />
        <Route path="/Result" element={<Result />} />

      </Routes>
  </Router>
  );
}

export default App;
