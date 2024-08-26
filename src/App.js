import React from 'react';
import LandingPage from './LandingPage';
import { HashRouter, Route, Routes } from "react-router-dom";
import ContactUs from './ContactUs';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
