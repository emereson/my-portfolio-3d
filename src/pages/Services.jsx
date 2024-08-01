import React, { useEffect } from 'react';
import './pagesStyle/service.css';
import { SlScreenSmartphone } from 'react-icons/sl';
import { FaLaptopCode } from 'react-icons/fa6';
import { GrSystem } from 'react-icons/gr';
import { MdWeb } from 'react-icons/md';
import { CgIfDesign } from 'react-icons/cg';
import { FaShopify } from 'react-icons/fa';
import { GrConfigure } from 'react-icons/gr';
import useIntersectionObserverOnResize from '../hook/useIntersectionObserverOnResize';

const Services = () => {
  useIntersectionObserverOnResize('page-2');

  return (
    <div className=" page services_container" id="page-2">
      <section className="services_section_one">
        <h2>Servicios</h2>
      </section>
      <section className="services_section_two" id="pointer-1">
        <article className="servicesSectionTwo_article">
          <i className="servicesSectionOne_icons">
            <SlScreenSmartphone />
          </i>
          <h3>Desarrollo de Aplicaciones Móviles</h3>
          <p>
            ¡Dale vida a tus ideas con aplicaciones móviles innovadoras! Desarrollo aplicaciones
            tanto para Android como para iOS, utilizando los lenguajes de programación más
            avanzados. Desde experiencias tipo Tinder hasta reproductores de música, reservas para
            restaurantes, e-commerce y mucho más. Transforma tus conceptos en realidades móviles que
            cautiven a tus usuarios.
          </p>
        </article>
        <article className="servicesSectionTwo_article">
          <i className="servicesSectionOne_icons">
            <FaLaptopCode />
          </i>
          <h3>Desarrollo de Aplicaciones Web</h3>
          <p>
            Convierte tus ideas en experiencias web cautivadoras. Diseñaré aplicaciones web únicas,
            desde plataformas interactivas de blogs hasta sistemas de gestión de contenido,
            utilizando las últimas tecnologías para garantizar un rendimiento excepcional y una
            experiencia de usuario que sobresalga.
          </p>
        </article>

        <article className="servicesSectionTwo_article">
          <i className="servicesSectionOne__icons">
            <GrSystem />
          </i>
          <h3>Desarrollo de Sistemas</h3>
          <p>
            Creación, implementación y optimización de sistemas robustos. Desde sistemas de ventas y
            gestión de almacenes hasta soluciones personalizadas para la automatización de procesos,
            me aseguraré de que tu sistema sea más que una solución: ¡sea una ventaja competitiva
            que supere tus expectativas!
          </p>
        </article>

        <article className="servicesSectionTwo_article">
          <i className="servicesSectionOne__icons">
            <MdWeb />
          </i>
          <h3>Desarrollo de Páginas Web</h3>
          <p>
            Potencia tu presencia en línea con páginas web impactantes y funcionales. Ya sea un
            sitio informativo o un portafolio dinámico, estarás listo para destacar en la web. Desde
            el primer vistazo, tu sitio será una obra maestra digital.
          </p>
        </article>

        <article className="servicesSectionTwo_article">
          <i className="servicesSectionOne__icons">
            <CgIfDesign />
          </i>
          <h3>Diseño Web y Mobile</h3>
          <p>
            Dale vida a tu marca con un diseño web y móvil excepcional. Desde la creación de una
            identidad visual única hasta la entrega de una experiencia de usuario inolvidable, mis
            soluciones de diseño garantizan que tu presencia en línea sea impactante y atractiva.
          </p>
        </article>

        <article className="servicesSectionTwo_article">
          <i className="servicesSectionOne__icons">
            <FaShopify />
          </i>
          <h3>E-commerce</h3>
          <p>
            Eleva tu negocio en línea con soluciones de comercio electrónico efectivas. Desde la
            configuración hasta la optimización, ofrecerás experiencias de compra extraordinarias.
            Tu tienda en línea no solo será funcional, ¡sino una joya digital que atraerá a tus
            clientes!
          </p>
        </article>

        <article className="servicesSectionTwo_article">
          <i className="servicesSectionOne__icons">
            <GrConfigure />
          </i>
          <h3>Mantenimientos</h3>
          <p>
            Mantén tu presencia digital en su mejor forma. Mi servicio de mantenimiento continuo
            garantiza que tu sitio o aplicación siempre funcione sin problemas y esté actualizado
            con las últimas tendencias. Tranquilidad y eficiencia para tu negocio en línea.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Services;
