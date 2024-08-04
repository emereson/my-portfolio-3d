import { Suspense, useEffect, useState } from 'react';
import './App.css';
import Scene from './components/Scene';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';

function App() {
  const [fontColor, setfontColor] = useState('gold');
  const [activeThemeColor, setactiveThemeColor] = useState(false);

  const toggleActiveThemeMode = () => {
    setactiveThemeColor(!activeThemeColor);
  };

  useEffect(() => {
    // Se ejecutará cada vez que darkMode o fontColor cambie
    document.body.className = ` ${
      fontColor === 'red'
        ? 'theme__red'
        : fontColor === 'orange'
        ? 'theme__orange'
        : fontColor === 'plate'
        ? 'theme__plate'
        : fontColor === 'blue'
        ? 'theme__blue'
        : 'theme__pink'
    }`;

    // Función de limpieza para eliminar las clases cuando el componente se desmonta
    return () => {
      document.body.className = '';
    };
  }, [fontColor]); // Dependencias del efecto

  return (
    <>
      <section className={` app__modeColor  ${activeThemeColor ? 'activeThemeColor' : ''}`}>
        <div className="appModeColor__iconsContainer">
          <div className="color_spin" onClick={toggleActiveThemeMode}>
            <span className="segment segment1"></span>
            <span className="segment segment2"></span>
            <span className="segment segment4"></span>
            <span className="segment segment5"></span>
          </div>
        </div>
        <div className="appModeColor__themeColors">
          <p>Theme Colors</p>
          <ul>
            <li onClick={() => setfontColor('gold')} style={{ backgroundColor: '#b9ad65' }}></li>
            <li onClick={() => setfontColor('red')} style={{ backgroundColor: '#dc3128' }}></li>
            <li onClick={() => setfontColor('plate')} style={{ backgroundColor: '#9399a1' }}></li>
            <li onClick={() => setfontColor('blue')} style={{ backgroundColor: '#0022aa' }}></li>
          </ul>
        </div>
      </section>
      <div className="scene_container">
        <Suspense fallback={null}>
          <Scene fontColor={fontColor} />
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
