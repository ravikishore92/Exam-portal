

import './App.css';
import Questions from './Questions/Questions';
import Sidenav from './Sidenav/Sidenav';
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Questionbox from './QuestionBox/Questionbox';
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
