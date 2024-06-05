import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/*" element={<Main />} /> {/* Use Main for handling sub-routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
