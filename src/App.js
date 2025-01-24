import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BottomNav from './components/layout/BottomNav';
import Search from './components/search/search';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/women" element={<Home />} />
          <Route path="/men" element={<Home />} />
          <Route path="/kids" element={<Home />} />
        </Routes>
        <Search isOpen={isSearchOpen} onClose={handleSearchClose} />
        <BottomNav onSearchOpen={handleSearchOpen} />
      </BrowserRouter>
    </div>
  );
}

export default App;