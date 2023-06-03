import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import CreateMasqs from './CreateMasqs';
import ProcessVideo from './ProcessVideo';
import About from './About';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-masqs" element={<CreateMasqs />} />
          <Route path="/process-video" element={<ProcessVideo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;