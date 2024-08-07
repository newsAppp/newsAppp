// src/App.js
import React from 'react';
import NewsList from './components/NewsList';
import Header from './components/Header'; 

const App = () => {
  return (
    <div>
      <Header/>
      
      <NewsList />
    </div>
  );
};

export default App;
