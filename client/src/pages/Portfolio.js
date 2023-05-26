import '../styles/Portfolio.css';
import '../styles/reset.css';
import logowad from '../utilities/imgs/logowad.png';
import linkImgData from '../images/link.json';
import Header from '../components/Header';
import AddImages from '../components/AddImages';
import React, { useState, useEffect } from 'react';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';


function Portfolio() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.title = 'WadeeKT - Portfolio';
  }, []);

  useEffect(() => {

    const swiper = new Swiper('.portfolio-swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
    Swiper.use([Autoplay, Navigation, Pagination]);

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className={`b-portfolio ${isMounted ? 'b-portfolio-enter' : ''}`}>
      <AddImages  />
      <Header />
      <div className="page-container">
        <h1>Portfolio</h1>
        <span className="logo-page-cont">
          <img className="logo-page-wad" src={logowad} alt="Logo WadeeKT" />
        </span>
        <div className="swiper-container portfolio-swiper-container swiping">
          <div className="swiper-wrapper">
            {linkImgData.links.map((link, index) => (
              <a key={index} className="swiper-slide" href={link}>
                <img className="images-portfolio" src={link} alt={`Slide ${index + 1}`} />
              </a>
            ))}
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Portfolio;