import { Suspense } from 'react';

import './App.css';
import Scene from './components/Scene';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
      <div className="scene_container">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
      <div className="pages_container">
        <Home />
        <Services />
        <Projects />
        <AboutMe />
        <Contacts />
      </div>
    </>
  );
}

export default App;
