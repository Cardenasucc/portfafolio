import { useState } from 'react'
import React from 'react';
import './App.css'
import "./javascript/vendor/glightbox.js";
import "./javascript/vendor/keen-slider.js";
import "./javascript/vendor/shufle.js";
import "./javascript/main.js";
import "./css/vendor/bootstrap/bootstrap.css"
import './css/main.css';
import './css/responsive.css';
import { useTranslation } from 'react-i18next';
import './i18n.ts';
import casablanca from "../src/assets/image/casablanca.png"
import yo from "../src/assets/image/yopng.jpg"
import deividcarnaval from "../src/assets/image/deividcarnaval.jpg"
import css from "../src/assets/image/css.png"
import Github from "../src/assets/image/GitHub.png"
import Hotmail from "../src/assets/image/Hotmail.png"
import instagram from "../src/assets/image/instagram.png"
import linkedln from "../src/assets/image/linkedln.png"
import skull from "../src/assets/image/skull.jpg"
import js from "../src/assets/image/js.png"
import mysql from "../src/assets/image/mysql.png"
import psql from "../src/assets/image/psql.png"
import python from "../src/assets/image/python.png"


function Header() {
  const { t, i18n } = useTranslation(); // Hook useTranslation para acceder a las traducciones

  // Función para cambiar el idioma
  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage); // Cambiar el idioma en el objeto i18n
  };


  return (
    <>
      {/* header */}
      <header id="headermain" className="header-main fixed-top">
        <div className="container">
          <div className="row headerwrap align-items-center">
            <div className="col-xs-12 col-md-12 col-lg-9">
              <nav className="navpage text-left">
                <ul className="navpage__wrap">
                  <li className="navpage__list">
                    <a href="#sectionhero" className="navpage__link" style={{ fontSize: '18px', color: '#ffffff' }}>{t('PORTAFOLIO')}</a>
                  </li>
                  <li className="navpage__list"><a href="#aboutsection" className="navpage__link" style={{ fontSize: '18px', color: '#ffffff' }}></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* end header */}
      {/* mobile nav */}
      <div className="overlay">
        <div className="overlay__navigation">
          <ul className="overlay__listnav">
            <li className="navpage__list"><a href="#sectionhero" className="navpage__link" style={{ fontSize: '18px', color: '#ffffff' }}>{t('skills')}</a></li>
          </ul>
        </div>
      </div>
      {/* end mobile nav */}
      {/* PRELOADER */}
    </>
  );
}


 
function MainWrap() {
  const { t } = useTranslation();

  return (
    <main id="mainwrap">
      {/* section hero */}
      <div id="sectionhero" className="sectionblock">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pr-0 mr-0 pl-lg-0 pr-lg-5 mr-lg-0 mt-3 mt-lg-0 align-items-center justify-content-center align-items-lg-left justify-content-lg-left text-center text-lg-left d-flex order-1 order-lg-0">
              <div className="infohero">
                <h1 className="infohero__title" style={{ fontSize: '5rem' }}>
                  Hello, I'm Deivid, your programming engineer.
                  <span style={{ fontSize: '2rem' }}>
                    I am passionate about creating experiences that are engaging, accessible and focused on quality.
                  </span>
                </h1>
                <span id="typed-text"></span>
                <span className="cursor blink">&nbsp;</span>
              </div>
            </div>
            <div className="col-lg-6 text-center order-0 order-lg-1 mb-5 mb-lg-0">
              <div className="heroimg">
                <img src={yo} alt="poto" className="img-fluid heroimg__poto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end section hero */}

      {/* about section */}
      <div id="aboutsection" className="sectionblock">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="abouthero">
                <h3>{t('Lets collaborate if you are looking for innovative solutions')}</h3>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="square" style={{ backgroundColor: '#555', color: '#fff', padding: '1rem', borderRadius: '2rem' }}>
                <p className="texto-grande-1">#001</p>
                <p className="texto-mediano-1">{t('To collaborate')}</p>
                <p className="texto-pequeno-1">
                  {t('Good design is not created in a vacuum, but in a shared space. It must be facilitated and iterated as a team. My goal is to include stakeholders in my design process and create a collaborative environment that welcomes and encourages feedback.')}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="square" style={{ backgroundColor: '#555', color: '#fff', padding: '1rem', borderRadius: '2rem' }}>
                <p className="texto-grande-2">#002</p>
                <p className="texto-mediano-2">{t('Accessible')}</p>
                <p className="texto-pequeno-2">
                  {t('My goal is to make everything I design accessible to everyone for one main reason: it\'s the right thing to do. Affordable products benefit the many, not the few.')}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="square" style={{ backgroundColor: '#555', color: '#fff', padding: '1rem', borderRadius: '2rem' }}>
                <p className="texto-grande-3">#003</p>
                <p className="texto-mediano-3">{t('Keep experimenting')}</p>
                <p className="texto-pequeno-3">
                  {t('Everything we create is subject to change and experimentation. Not everything will work or turn out as we hope, but it is worth trying. We learn more from our mistakes than from our achievements.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end about section */}
    </main>
  );
}

function Service() {
  const { t } = useTranslation();

  const logoData = [
    {
      image: js,
    },
    {
      image: Github,
    },
    {
      image: python,
    },
    {
      image: css,
    },
    {
      image: psql,
    },
    {
      image: mysql,
    },
  ];


  return (
    <main id="mainwrap">
      {/* Sección "You can contact me" */}
      <div id="aboutsection" className="sectionblock">
        <div className="container">
          <div className="row">
            {/* Contenido a la izquierda */}
            <div className="col-lg-4 text-center text-lg-left d-flex align-items-center">
                <div className="abouthero">
                    <h3>{t('You can ')}</h3>
                    <h3>{t('contact me')}</h3>
                    <p>{t('Here you can find my projects')}</p>
                </div>
            </div>

            {/* Cuadros 2x2 a la derecha */}
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="square bg-gray-900 text-white p-4 d-flex align-items-center">
                    <img src={Github} alt="Github" className="img-fluid icon mr-3" style={{ maxWidth: '30%' }} />
                    <div>
                      <h4>Github</h4>
                      <p>Here you can contact me</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="square bg-gray-900 text-white p-4 d-flex align-items-center">
                    <img src={linkedln} alt="LinkedIn" className="img-fluid icon mr-3" style={{ maxWidth: '30%' }} />
                    <div>
                      <h4>LinkedIn</h4>
                      <p>Here you can contact me</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="square bg-gray-900 text-white p-4 d-flex align-items-center">
                    <img src={Hotmail} alt="Contact" className="img-fluid icon mr-3" style={{ maxWidth: '30%' }} />
                    <div>
                      <h4>{t('Hotmail')}</h4>
                      <p>Here you can contact me</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="square bg-gray-900 text-white p-4 d-flex align-items-center">
                    <img src={instagram} alt="Instagram" className="img-fluid icon mr-3" style={{ maxWidth: '30%' }} />
                    <div>
                      <h4>Instagram</h4>
                      <p>Here you can contact me</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fin de la sección "You can contact me" */}

      {/* Sección "About Us" */}
      <div className="about-us-section sectionblock">
        <div className="container">
          <div className="row">
            {/* Título */}
            <div className="col-lg-12 mb-6 px-9">
              <h1>About Us</h1>
            </div>
            {/* Texto a la izquierda, imagen a la izquierda y texto pequeño debajo */}
            <div className="col-lg-6 mb-4 order-lg-2">
              <p>
                El 3 de enero en la ciudad de San Juan de Pasto se lleva a cabo el Desfile Colectivo Coreográfico, el cual es una gira de más de ocho mil artistas, quienes participan en su presentación del canto a la tierra, del cual he participado durante 5 años seguidos en diferentes colectivos coreograficos
              </p>
              <img src={deividcarnaval} alt="Image 1" className="img-fluid mb-3" style={{ maxWidth: '65%' }} />
              <p className="text-muted">Black and white carnival San Juan de Pasto January 3</p>
            </div>
            {/* Imagen a la derecha, texto pequeño debajo y texto a la derecha */}
            <div className="col-lg-6 mb-4 order-lg-1">
              <img src={skull} alt="Image 2" className="img-fluid mb-3" style={{ maxWidth: '65%' }} />
              <p className="text-muted">Dibujos</p>
              <p>
                El arte del dibujo es también otra afición que suelo tener en mi tiempo libre, ya que gracias al dibujo he encontrado una forma de despejar la mente y descubrir nuevas ideas al dibujar..
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fin de la sección "About Us" */}

      {/* Sección de cuadros 3x2 de logos */}
      <div className="logos-section sectionblock">
        <div className="container">
          <h2>{t('Skills')}</h2>
          <div className="row justify-content-center">
            {logoData.map((logo, index) => (
              <div key={index} className="col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                <img src={logo.image} alt={`Logo ${index + 1}`} className="img-fluid icon" style={{ maxWidth: '40%' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Fin de la sección de cuadros 3x2 de logos */}

    </main>
  );
}




function App() {
  return (
    <>
      <Header />
      <MainWrap />
      <Service />
    </>
  );
}

export default App;
