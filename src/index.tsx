import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Contact from './components/Contact'
import RepositoriesList from './components/RepositoriesList';
import { Analytics } from '@vercel/analytics/react';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Technologies from './components/Technologies';
import NavigationMenu from './components/NavigationMenu';
import AboutMe from './components/AboutMe';
import ErrorPage from './components/ErrorPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Analytics />
        <main>
          <Carousel />
          <NavigationMenu />
          <Routes>
           <Route path='/' element={<RepositoriesList />} />
           <Route path='/technologies' element={<Technologies />} />
           <Route path='/aboutme' element={<AboutMe />} />
           <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <Contact />
      </div>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();







// function App() {

//   useEffect(() => {
//     AOS.init({
//       duration : 2000
//     });
//     }, []);

//   return (
    
//   );
// }

// export default App;