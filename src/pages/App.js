import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Auction from './Auction';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auction/:id" element={<Auction />} />
    </Routes>
  );
}

export default App;
