"use client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";
import { mdiAccountHeartOutline } from "@mdi/js";
import { mdiChartLine } from "@mdi/js";
import { mdiReload } from "@mdi/js";
import { mdiTicketConfirmation } from "@mdi/js";
import { mdiViewGridOutline } from "@mdi/js";
import { mdiCreditCardOutline } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";
import { mdiMenu, mdiClose } from "@mdi/js";
import "../styles/style.css";
import '../styles/mobile.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";

import { initCarousel } from "../../utils/carousel";
import { addHoverEffect } from "../../utils/hover";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      initCarousel();
      addHoverEffect();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Akaal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="hero-section" id="home">
        <header className="hero-header">
          <div className="hero-content" id="carouselSlides">
            {/* Slide 1 */}
            <div className="slide active">
              <div className="hero-image-wrapper">
                <Image
                  src="/img/LandingPage.png"
                  alt="Deskripsi Gambar"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center"  }}
                />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="slide active">
              <Image
                src="/img/image-2.png"
                alt="Deskripsi Gambar"
                fill
                style={{ objectFit: "cover" }}
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
              Bringing Vision to Life,
              <br />
              Delivering Solutions.
            </h1>
            <p>
              Kami membangun kepercayaan dan memperkuat identitas. Dengan
              menggabungkan teknologi terkini dan inovasi kreatif, kami
              meningkatkan efektivitas serta jangkauan kampanye transformatif.
              Komitmen kami untuk memahami setiap kebutuhan unik memastikan
              bahwa setiap solusi yang kami hadirkan memberikan dampak nyata,
              beresonansi dengan audiens Anda, dan mendorong pertumbuhan yang
              berkelanjutan.
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
                <p>lebih dari 100 brand telah sukses <br></br> berkembang bersama kami</p>
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <Icon path={mdiReload} size={1} />
              </div>
              <div className="text">
                <h3>We Make Their Brand Speak</h3>
                <p>Mengubah brand menjadi suara yang <br></br>kuat dan berpengaruh.</p>
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <Icon path={mdiAccountHeartOutline} size={1.2} />
              </div>
              <div className="text">
                <h3>We Create Loyalist</h3>
                <p>
                  Membangun hubungan emosional <br></br>yang menciptakan pelanggan setia.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <Icon path={mdiChartLine} size={1.2} />
              </div>
              <div className="text">
                <h3>We Increase Value</h3>
                <p>
                  Mengoptimalkan strategi untuk<br></br> meningkatkan daya saing dan
                  nilai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 1 End*/}

      {/* Section 2 */}
      <section className="section2">
    
        <div className="title-wraper">
          <div className="title">
            <div className="title-line" />
            <h2 className="title-text">Our Services</h2>
          </div>
        </div>
        
        <div className="section2-wrapper">
          <div className="container-section2">
            <div className="left-serv">
              <Image
                src="/img/Iphone.png"
                width={280}
                height={300}
                alt="iPhone"
                className="iphone-img"
              />
            </div>
            <div className="right-serv">
              <div className="card-grid">
                {[
                  {
                    id: "01",
                    title: "Digital Strategy",
                    items: [
                      "Digital Marketing",
                      "Omni-Channel Advertising",
                      "Event Planning & Management",
                    ],
                  },
                  {
                    id: "02",
                    title: "Visual Experience",
                    items: [
                      "Branding & Design",
                      "Photography & Videography",
                      "3D Motion & Modeling",
                    ],
                  },
                  {
                    id: "03",
                    title: "Business Apps",
                    items: [
                      "Custom Solution Systems",
                      "Creative Development",
                      "Data Analysis",
                    ],
                  },
                  {
                    id: "04",
                    title: "Marketing Agency",
                    items: [
                      "Branding",
                      "Marketing Strategies",
                      "Media Monitoring",
                    ],
                  },
                ].map((card) => (
                  <div key={card.id} className="card">
                    <span className="card-number">{card.id}</span>
                    <h3>{card.title}</h3>
                    <ul>
                      {card.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="service-btn-wrapper">
          <button className="service-btn">Our Services</button>
        </div>
      </section>
      {/* Section 2 End*/}

      {/* Section 3 */}
      <section class="section3">
        <div className="wrapper">
          <h2 className="judul">
            Be the <span class="highlight">Game Changer</span> with <br />
            <span className="highlight">One Stop</span> Digi-Solution.
          </h2>
          <div className="visual">
            <Image
              src="/img/light.png"
              width={800}
              height={500}
              alt="Digital Solution Illustration"
            />
          </div>
          <p className="description">
            Kami adalah mitra inovatif yang siap membawa bisnis Anda ke era
            digital dengan teknologi mutakhir. Berbasis di Jakarta, Akaal
            menghadirkan solusi terbaik dalam digital marketing, branding
            kreatif, IT solutions, dan AI automation yang dirancang khusus untuk
            memenuhi kebutuhan unik setiap klien. Sebagai partner strategis,
            kami berkomitmen untuk mendorong kesuksesan digital Anda melalui
            keahlian, kreativitas, dan teknologi terbaru.
          </p>
          <a href="#about" className="btn btn-primary">
            About AKAAL
          </a>
        </div>
      </section>

      {/* Section 4 */}
      <section className="section4">
        <div className="content">
          <Image
            src="/img/AksessLogo.png"
            alt="Aksess Logo"
            width={144}
            height={37}
            class="logo"
          />

          <h2 className="heading">
            The Ultimate Ticketing Solution for <br />
            Seamless Events.
          </h2>
          <p className="subheading">
            Kelola dan jual tiket event dengan lebih mudah, cepat, dan aman
            dengan AKSESS—platform ticketing inovatif yang dirancang untuk
            penyelenggara event modern.
          </p>

          <div className="features">
            <div className="feature">
              <Icon path={mdiTicketConfirmation} size={1} />
              <div>
                <h4>Pemesanan Tiket Mudah</h4>
                <p>Sistem whitelabel dengan kategori tiket yang fleksibel</p>
              </div>
            </div>

            <div className="feature">
              <Icon path={mdiViewGridOutline} size={1} />
              <div>
                <h4>Dashboard Manajemen</h4>
                <p>
                  Pantau penjualan, pemesanan, dan check-in dalam satu tempat
                </p>
              </div>
            </div>

            <div className="feature">
              <Icon path={mdiCreditCardOutline} size={1} />
              <div>
                <h4>Pembayaran Terintegrasi</h4>
                <p>Dukungan berbagai metode pembayaran yang aman dan efisien</p>
              </div>
            </div>
          </div>
          <div className="btn-aksess-wrapper">
            <a href="#aksess" className="btn">
              Jelajah AKSESS
            </a>
          </div>
        </div>
      </section>

      {/* Section5 */}
      <section className="section5">
        <div className="section5-container">
          <div className="section5-judul-desc">
            <p className="section5-left">
              Kami telah berkolaborasi dengan berbagai brand, menghadirkan
              solusi digital yang memperkuat identitas dan memperluas jangkauan
              mereka.
            </p>
            <h2 className="section5-right">
             <span> Our Latest Projects.</span>
            </h2>
          </div>
          <div className="card-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="project-card">
                <div className="card-image">
                  <Image
                    src="/img/image-11.png"
                    width={632}
                    height={400}
                    alt="Project"
                  />
                </div>
                <div className="card-content">
                  <p className="client">Client</p>
                  <h3>Bank Syariah Indonesia</h3>
                  <p className="location">Jakarta, Indonesia</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="clients-section">
          {/* garis */}
          <div className="title-wraper">
          <div className="title">
            <h2 className="title-text">Clients and Partners</h2>
            <div className="title-line" />
          </div>
        </div>
          <div className="clients-carousel">
            <button className="carousel-arrow">&#8592;</button>

            <div className="clients-logos">
              <Image
                src="/img/hei.png"
                width={134}
                height={53}
                alt="Client 1"
              />
              <Image
                src="/img/bsi.png"
                width={134}
                height={53}
                alt="Client 2"
              />
              <Image
                src="/img/ikram.png"
                width={134}
                height={53}
                alt="Client 3"
              />
              <Image
                src="/img/hijrahfest.png"
                width={134}
                height={53}
                alt="Client 4"
              />
              <Image
                src="/img/laukstory.png"
                width={134}
                height={53}
                alt="Client 5"
              />
              <Image
                src="/img/ocula.png"
                alt="Client 6"
                width={134}
                height={53}
              />
            </div>
            <button className="carousel-arrow">&#8594;</button>
          </div>

          <div className="portfolio-button-container">
            <button className="portfolio-button">Portofolio</button>
          </div>
        </div>
      </section>
    </>
  );
}
