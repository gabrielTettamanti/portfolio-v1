import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import './index.css';

import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Contact from './components/Contact'
import NavigationMenu from './components/NavigationMenu';
import Loading from './components/Loading';

const RepositoriesList = lazy(() => import('./components/RepositoriesList'));
const Technologies = lazy(() => import('./components/Technologies'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const ErrorPage = lazy(() => import('./components/ErrorPage'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main>
          <Carousel />
          <NavigationMenu />
          <Suspense
            fallback={<Loading />}
          >
            <Routes>
              <Route path="/" element={<RepositoriesList />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </main>
        <Contact />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
