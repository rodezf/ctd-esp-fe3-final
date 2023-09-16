import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Card from './Components/Card';
import Footer from './Components/Footer';

import Home from './Home/'; // Assuming an index.js or index.jsx in the Home directory
import Favorites from './Components/Favorites';
import NotFound from './NotFound'; // Fixed the import typo

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Form />} />
            <Route path="/dentist/:id" element={<Card />} />
            <Route path="/favs" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
