import React, { useState } from 'react';
import './App.css';
import ProjectPage from './components/ProjectPage';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './home/HomePage';
import Contact from './contact/Contact';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <BrowserRouter>
      <header className='sticky'>
        <div className='logo'>
          <img src='/assets/logo__2_-removebg-preview.png' alt='logo' width={'120'} height={'99'} />
        </div>
        <div className='nav-buttons'>
          <NavLink to='/' className="button rounded">
            <span className='icon-home'></span>
            Home
          </NavLink>
          <NavLink to='/projects' className="button rounded">
            Menu
          </NavLink>
          <NavLink to='/contact' className="button rounded">
            Contact
          </NavLink>
        </div>
      </header>

      <div className='container'>
        <Routes>
          <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
          <Route path="/projects" element={<ProjectPage searchQuery={searchQuery} />} />
          <Route path="/projects/:id" element={<ProjectPage searchQuery={searchQuery} />} />
          <Route path="/contact" element={<Contact searchQuery={searchQuery} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
