import { use, useState } from "react";
import React from 'react';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentPage from './components/organisms/StudentPage';



function App () {


  return(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<StudentPage />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;