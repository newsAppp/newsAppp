// src/App.js
import React from 'react';
import LandingPage from './LandingPage';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <LandingPage></LandingPage>
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
