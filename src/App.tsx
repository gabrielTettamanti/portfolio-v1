import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Contact from './components/Contact'
import AnalogClock from './components/AnalogClock';
import RepositoriesList from './components/RepositoriesList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <RepositoriesList />
      <Contact />
    </div>
  );
}

export default App;
