import React, {useEffect} from 'react';
import AOS from 'aos'
import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Contact from './components/Contact'
import AnalogClock from './components/AnalogClock';
import RepositoriesList from './components/RepositoriesList';
import useScrollDetector from './components/hooks/useScrollDetector';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    }, []);

  return (
    <div className="App">
      <NavBar />
      <main>
        <Carousel />
        <RepositoriesList />
      </main>
      <Contact />
    </div>
  );
}

export default App;
