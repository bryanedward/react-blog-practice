import React from 'react';
import './App.css';
import IndexHome from './containers/Home/Index'
import IndexHero from './components/Hero/Index';
import IndexHeader from './components/Header/Index';


function App() {
  return (
    <div className="App">
      <IndexHeader/>
      <IndexHero />
      <IndexHome />
    </div>
  );
}

export default App;
