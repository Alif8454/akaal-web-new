'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Icon from '@mdi/react';
import { mdiCheckCircleOutline } from '@mdi/js';
import { mdiAccountHeartOutline } from '@mdi/js';
import { mdiChartLine } from '@mdi/js';
import { mdiReload } from '@mdi/js';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initCarousel } from '../../utils/carousel';
import { addHoverEffect } from '../../utils/hover'; 

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initCarousel();
      addHoverEffect();
    }
  }, []);
  {/* Head End*/}
  
   {/* Landing Page */}
  return (
    <>
      <Head>
        <title>Akaal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand text-white order-lg-1 mx-lg-auto" href="#home">
            <Image
              src="/img/logo-fullcolor-negative-rgb copy.png"
              alt="Logo Akaal"
              width={100}
              height={32}
              className="d-inline-block align-text-top"
              priority
            />
          </a>

          <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Akaal</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Our Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
            </ul>
          </div>
        </div>
        <div className="contact-btn-container d-none d-lg-block">
          <a href="#" className="custom-button">
              Contact
          </a>
        </div>
      </nav>

      <section className="hero-section" id="home">
      <header className="hero-header">
          <div className="hero-content" id="carouselSlides">
              {/* Slide 1 */}
              <div className="slide active" style={{ width: '1920px', height: '630px' }}>
                  <Image 
                    src="/img/LandingPage.png" 
                    alt="Deskripsi Gambar" 
                    className="image-class" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
              </div>

              {/* Slide 2 */}
              <div className="slide active"   style={{ position: 'relative', width: '1920px', height: '630px' }}>
                    <Image 
                      src="/img/image-2.png" 
                      alt="Deskripsi Gambar" 
                      className="image-class2" 
                      fill
                    />
              </div>
          </div>
        </header>

        <div className="hero-navigation">
          <Image
            src="/img/Arrow-left.png"
            alt="Left Arrow"
            width={40}
            height={40}
            className="arrow-icon"
            id="prevSlide"
          />
          <Image
            src="/img/Arrow-right.png"
            alt="Right Arrow"
            width={40}
            height={40}
            className="arrow-icon"
            id="nextSlide"
          />
        </div>
      </section>
      {/* Landing Page End */}

      {/* Section 1 */}
      <section className="section1">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <h1>
            Bringing Vision to Life,<br />Delivering Solutions.
          </h1>
          <p>
            Kami membangun kepercayaan dan memperkuat identitas. Dengan menggabungkan teknologi terkini
            dan inovasi kreatif, kami meningkatkan efektivitas serta jangkauan kampanye transformatif.
            Komitmen kami untuk memahami setiap kebutuhan unik memastikan bahwa setiap solusi yang kami
            hadirkan memberikan dampak nyata, beresonansi dengan audiens Anda, dan mendorong pertumbuhan yang berkelanjutan.
          </p>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="item">
          <div className="icon">
          <Icon path={mdiCheckCircleOutline} size={1.2} />
          </div>
            <div className="text">
              <h3>Were a proven partner</h3>
              <p>lebih dari 100 brand telah sukses berkembang bersama kami</p>
            </div>
          </div>

          <div className="item">
            <div className="icon">
              <Icon path={mdiReload} size={1} />
            </div>
            <div className="text">
              <h3>We Make Their Brand Speak</h3>
              <p>Mengubah brand menjadi suara yang kuat dan berpengaruh.</p>
            </div>
          </div>

          <div className="item">
            <div className="icon">
              <Icon path={mdiAccountHeartOutline} size={1.2} />
            </div>
            <div className="text">
              <h3>We Create Loyalist</h3>
              <p>Membangun hubungan emosional yang menciptakan pelanggan setia.</p>
            </div>
          </div>

          <div className="item">
            <div className="icon">
               <Icon path={mdiChartLine} size={1.2} />
            </div>
            <div className="text">
              <h3>We Increase Value</h3>
              <p>Mengoptimalkan strategi untuk meningkatkan daya saing dan nilai.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section 1 End*/}

    {/* Section 2 */}
    <section className="section2">
      <div className="container-section2">
        <div className="left-serv">
            <Image src="/img/Iphone.png"  width={280} 
              height={300} alt="iPhone" className="iphone-img" />  
        </div>
        <div className="right-serv">
          <h2 className="section-title"><span className="line"></span> Our Services</h2>
          <div className="card-grid">
            {[
              {
                id: '01',
                title: 'Digital Strategy',
                items: ['Digital Marketing', 'Omni-Channel Advertising', 'Event Planning & Management']
              },
              {
                id: '02',
                title: 'Visual Experience',
                items: ['Branding & Design', 'Photography & Videography', '3D Motion & Modeling']
              },
              {
                id: '03',
                title: 'Business Apps',
                items: ['Custom Solution Systems', 'Creative Development', 'Data Analysis']
              },
              {
                id: '04',
                title: 'Marketing Agency',
                items: ['Branding', 'Marketing Strategies', 'Media Monitoring']
              }
            ].map(card => (
              <div key={card.id} className="card">
                <span className="card-number">{card.id}</span>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="service-btn-wrapper">
            <button className="service-btn">Our Services</button>
          </div>
        </div>
      </div>
    </section>
    {/* Section 2 End*/}


      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          {/* Kolom 1 */}
          <div className="footer-column">
            <Image
              src="/img/logo-fullcolor-negative-rgb.svg"
              alt="Akaal Logo"
              width={120}
              height={40}
              className="footer-logo"
            />
            <p>PT. Asia Karya Lumina</p>
            <p>
              Jl. Gotong Royong | No.56 Rt.004/01, RT.3/RW.1,
              <br />
              Ragunan, Ps. Minggu, Kota Jakarta Selatan,
              <br />
              Daerah Khusus Ibukota Jakarta 12550
            </p>
            <p><i class="fas fa-phone-alt"></i> 081213957471</p>
            <p><i class="fas fa-envelope"></i> asiakaryalumina@gmail.com</p>

          </div>

          {/* Kolom 2 */}
          <div className="footer-column">
            <h4>Asia Karya Lumina</h4>
            <ul>
              <li><a href="#about">About AKAAL</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#">Partnership</a></li>
              <li><a href="#">Frequently Asked Question</a></li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div className="footer-column">
            <h4>Tentang Event</h4>
            <ul>
              <li><a href="#">Buat Event</a></li>
              <li><a href="#">Biaya</a></li>
              <li><a href="#">Lihat Event</a></li>
              <li><a href="#">S&amp;K Event</a></li>
              <li><a href="#">FAQ Event</a></li>
            </ul>
          </div>

          {/* Kolom 4 */}
          <div className="footer-column">
            <h4>Follow us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER END */}
    </>
  );
}
