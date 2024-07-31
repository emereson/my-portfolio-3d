import React from 'react';
import './pagesStyle/aboutme.css';

const AboutMe = () => {
  const descargarCV = () => {
    const enlaceTemporal = document.createElement('a');
    enlaceTemporal.href = './mi-cv.pdf';
    enlaceTemporal.download = 'Emerson_Wilson_CV.pdf';
    enlaceTemporal.click();
  };
  return (
    <div className=" page aboutMe_container" id="page-4">
      <section className="aboutMe__section-one">
        <article className="aboutMe__articleOne">
          <h2>Sobre Mí</h2>
          <p>
            ¡Saludos! Soy <span>Emerson</span>, un apasionado desarrollador con destacadas
            habilidades de comunicación y colaboración. Estoy en búsqueda de una posición a tiempo
            completo como front-end developer, back-end developer o full-stack developer, donde
            pueda aplicar mi experiencia para contribuir al éxito del equipo. Mi objetivo es
            continuar creciendo profesionalmente mientras aporto al desarrollo de soluciones
            innovadoras.
          </p>
        </article>
      </section>
      <section className="aboutMe__section_two">
        <ul>
          <li>
            Edad: <span>24 años</span>
          </li>
          <li>
            País: <span>Perú</span>
          </li>
          <li>
            Ciudad: <span>Arequipa</span>
          </li>
          <li>
            Freelance: <span>Disponible</span>
          </li>

          <li>
            Email: <span>emerson@idotcode.com</span>
          </li>

          <li>
            Whatsapp: <span>+51 927 482 386</span>
          </li>
        </ul>
        <div className="aboutMeSectionTwo__buttons">
          <button onClick={descargarCV}>Descargar CV</button>
          <button>
            <a
              href="https://api.whatsapp.com/send/?phone=51927482386&text=¡Hola%2C+buenos+días%21+Estoy+en+busca+de+servicios+de+programación+y+me+preguntaba+si+podrías+ayudarme.+&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactarme
            </a>
          </button>
        </div>
      </section>{' '}
      <section className="skills">
        <h2>Mis Habilidades</h2>
        <ul className="skills__ul">
          <li className="skills__li javascript">
            <i className="bx bxl-javascript"></i>
            <span>JavaScript</span>
          </li>
          <li className="skills__li html5">
            <i className="bx bxl-html5"></i>
            <span>Html</span>
          </li>
          <li className="skills__li css3">
            <i className="bx bxl-css3"></i>
            <span>Css</span>
          </li>
          <li className="skills__li react">
            <i className="bx bxl-react"></i>
            <span>React js</span>
          </li>
          <li className="skills__li postgresql">
            <i className="bx bxl-flutter"></i>
            <span>Flutter</span>
          </li>
          <li className="skills__li angular">
            <i className="bx bxl-angular"></i>
            <span>Angular</span>
          </li>
          <li className="skills__li bootstrap">
            <i className="bx bxl-bootstrap"></i>
            <span>Bootstrap</span>
          </li>
          <li className="skills__li nodejs">
            <i className="bx bxl-nodejs"></i>
            <span>Node Js</span>
          </li>
          <li className="skills__li postgresql">
            <i className="bx bxl-postgresql"></i>
            <span>Postgre SQL</span>
          </li>
          <li className="skills__li blender">
            <i className="bx bxl-blender"></i>
            <span>Blender</span>
          </li>
          <li className="skills__li php">
            <i className="bx bxl-php"></i>
            <span>php</span>
          </li>
          <li className="skills__li html5">
            <i className="bx bxl-python"></i>
            <span>Python</span>
          </li>
          <li className="skills__li react">
            <i className="bx bxl-wordpress"></i>
            <span>Wordpress</span>
          </li>
          <li className="skills__li github">
            <i className="bx bxl-github"></i>
            <span>Git Hub</span>
          </li>
          <li className="skills__li vuejs">
            <i className="bx bxl-vuejs"></i>
            <span>Vue Js</span>
          </li>
          <li className="skills__li java">
            <i className="bx bxl-java"></i>
            <span>Java</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMe;
