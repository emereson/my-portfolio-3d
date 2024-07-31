import { Suspense } from 'react';

import './App.css';
import Scene from './components/Scene';
import Home from './pages/Home';
import Services from './pages/Services';

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
      </div>
    </>
  );
}

export default App;
