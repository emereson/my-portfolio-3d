import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './pagesStyle/contacts.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent form submission
    const form = formRef.current;
    console.log(formRef.current); // Verifica si esto imprime el formulario HTML en la consola

    emailjs
      .sendForm('service_4jm7prj', 'template_jklu78m', form, '_3jiepsyN18d8ZuGd')
      .then((result) => {
        form.reset();
        toast('💌 El Correo se envio exitosamente 📩', {
          position: 'top-right',
          autoClose: 5001,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <div className=" page contact__container" id="page-5">
      <ToastContainer />
      <div className="contact_intro">
        <section className="contact__section-one">
          <h2>Contáctame</h2>
          <p>
            Si alguno de los proyectos que desarrollé ha capturado tu interés o si tienes en mente
            un proyecto único, ¡estoy aquí para hacerlo realidad! No dudes en contactarme para
            explorar cómo podemos llevar tu visión al siguiente nivel.
          </p>
        </section>
        <section className="contact__section-two">
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100087974955688" target="_blank">
                <i className="bx bxl-facebook-circle"></i>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=51927482386&text=¡Hola%2C+buenos+días%21+Estoy+en+busca+de+servicios+de+programación+y+me+preguntaba+si+podrías+ayudarme.+&type=phone_number&app_absent=0"
                target="_blank"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/emerson-yujra-997b52260" target="_blank">
                <i className="bx bxl-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:escanorrosa123@gmail.com" target="_blank">
                <i className="bx bxl-gmail"></i>
              </a>
            </li>
          </ul>
        </section>
        <section className="contact__section-three">
          <h3>ENVÍAME UN CORREO ELECTRÓNICO</h3>
          <form ref={formRef} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input type="text" name="name" id="name" placeholder="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" placeholder="email" required />
            </div>
            <div>
              <label htmlFor="whatssap">Whatssap:</label>
              <input type="text" name="whatssap" id="whatssap" placeholder="+51 987654321" />
            </div>
            <div>
              <label htmlFor="case">Asunto:</label>
              <input type="text" name="case" id="case" placeholder="case" required />
            </div>
            <div style={{ width: '100%' }}>
              <label htmlFor="message">Mensaje:</label>
              <textarea name="message" id="message" placeholder="message" required />
            </div>
            <div style={{ width: '90%' }}>
              <button className="contactSectionThree__button" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
