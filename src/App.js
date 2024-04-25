import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import './components/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import Calculator from './components/Calculator';
import Error from './components/Error';

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/calculator' exact element={<Calculator/>} />
          <Route path='*' element={<Error/>} /> 
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
