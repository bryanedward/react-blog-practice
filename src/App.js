import React from 'react';
import './App.css';
import IndexHome from './containers/Home/Index'
import IndexHero from './components/Hero/Index';
import IndexHeader from './components/Header/Index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IndexAboutUs from './containers/AboutUs/Index';
import IndexPost from './containers/Post/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <IndexHeader />
        <IndexHero />
        <Route path="/" exact component={IndexHome} />
        <Route path="/Contactos" exact component={IndexAboutUs} />
        <Route path="/Publicaciones" exact component={IndexPost} />
      </Router>
    </div>
  );
}

export default App;
