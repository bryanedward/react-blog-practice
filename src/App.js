import React from 'react';
import './App.css';
import IndexHome from './containers/Home/Index'
import IndexHero from './components/Hero/Index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePost from './containers/CreatePost/CreatePost';
import IndexPost from './containers/Post/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <IndexHero />
        <Route path="/" exact component={IndexPost} />
        <Route path="/Contactos"  component={CreatePost} />
        <Route path="/Publicaciones" component={IndexPost} />
        <Route path="/Publicaciones/:id" component={IndexPost} />
      </Router>
    </div>
  );
}

export default App;
