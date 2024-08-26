// src/App.js
import React from 'react';
import LandingPage from './LandingPage';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import ContactUs from './ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <LandingPage></LandingPage>
    ),
  },
  {
    path: 'contact-us',
    element: (
        <ContactUs></ContactUs>
    ),
  },
  
]);

const App = () => {
  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
};

export default App;
