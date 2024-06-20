import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { Apropos } from './components/services/apropos';
import { Blog } from './components/blog';
import { Contact } from './components/contact';
import Navbar from './components/Navbar';
import Marketing from './components/services/marketing/marketing';
import Developement from './components/services/developement/developement';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services/apropos" element={<Apropos />}>
          <Route path="marketing" element={<Marketing />} />
          <Route path="developement" element={<Developement />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
