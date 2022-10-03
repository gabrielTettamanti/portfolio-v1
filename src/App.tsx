import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Contact from './components/Contact'
import AnalogClock from './components/AnalogClock';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic officia illo maiores error, aliquid atque quod neque omnis, nobis tempore porro quos laudantium commodi iusto cupiditate maxime distinctio beatae delectus?
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic officia illo maiores error, aliquid atque quod neque omnis, nobis tempore porro quos laudantium commodi iusto cupiditate maxime distinctio beatae delectus?
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic officia illo maiores error, aliquid atque quod neque omnis, nobis tempore porro quos laudantium commodi iusto cupiditate maxime distinctio beatae delectus?
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic officia illo maiores error, aliquid atque quod neque omnis, nobis tempore porro quos laudantium commodi iusto cupiditate maxime distinctio beatae delectus?
        </p>
      </div>
      <Contact />
    </div>
  );
}

export default App;
