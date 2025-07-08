"use client";
import useClientSide from '../hooks/useClientSide'

// CSS Imports
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


// Component Imports
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Loader from "../../components/Loader";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import ResponsiveImage from "../../components/ResponsiveImage";
// Supabase Client
import { supabase } from "../config/supabaseClient";

// Custom Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";

// Utility Functions
import { initCarousel } from "../../utils/carousel";

// Icon Imports grouped by library

// 1. @mdi/react (Material Design Icons)
import Icon from "@mdi/react";
import {
  mdiCheckCircleOutline,
  mdiAccountHeartOutline,
  mdiChartLine,
  mdiReload,
  mdiTicketConfirmation,
  mdiViewGridOutline,
  mdiCreditCardOutline,
  mdiChevronRight,
  mdiMenu,
  mdiClose,
  mdiWhatsapp,
  mdiEmail,
} from "@mdi/js";

// 2. react-icons (Feather Icons)
import { FiTrendingUp, FiShield } from "react-icons/fi";

// 3. react-icons (BoxIcons)
import { BiSearchAlt2 } from "react-icons/bi";

// 4. react-icons (Font Awesome)
import {
  FaPaintBrush,
  FaCameraRetro,
  FaBullhorn,
  FaCheckCircle,
} from "react-icons/fa";

export default function Service() {
  const isClient = useClientSide()
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const fetchCards = async () => {
      const { data, error } = await supabase
        .from("client_cards")
        .select("id, image_url, client_name, location")
      
      if (!error) setCards(data)
    }

    fetchCards()
  }, [])

  useEffect(() => {
    if (isClient) {
      initCarousel()
      return () => cleanupCarousel()
    }
  }, [isClient])

  return (
    <>
      {isLoading && <Loader />}
      <div style={{ display: isLoading ? "none" : "block" }}>
        <section className="hero-section" id="home">
          <header className="hero-header">
            <div className="hero-content" id="carouselSlides">
              <div className="slide active">
                <div className="about-content-image-wrapper">
                  <Image
                    src="/img/service-content.png"
                    alt="Deskripsi Gambar"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="hero-navigation">
            <a href="#about">
            <Image
              src="/img/Arrow-down.png"
              alt="Arrow Down"
              width={40}
              height={40}
              className="arrow-icon"
              id="about"
            />
            </a>
          </div>
        </section>
        <section className="section2" data-animate="fadeInUp">
          <h2 className="section-title" id="solution">
            What We Do: <br></br> Creative. Strategic. Informative.
          </h2>
          <p className="section-desc">
            Solusi digital menyeluruh yang dirancang untuk membentuk masa depan
            bisnis Anda. Kami membaginya menjadi dua pilar utama: Akaal Digital
            untuk transformasi <br></br>
            teknologi, dan Akaal Agency untuk kekuatan strategi serta komunikasi
            brand.
          </p>

          <div className="image-container">
    <ResponsiveImage
      desktopSrc="/img/home-digi-container.png"
      mobileSrc="/img/digi1.png"
      alt="AKAAL DIGITAL Services"
      width={1200}
      height={600}
      layout="responsive"
      className="responsive-image"
    />
  </div>

  <div className="image-container">
    <ResponsiveImage
      desktopSrc="/img/home-digi2-container.png"
      mobileSrc="/img/digi2.png"
      alt="AKAAL DIGITAL Services"
      width={1200}
      height={600}
      layout="responsive"
      className="responsive-image"
    />
  </div>

  <div className="image-container">
    <ResponsiveImage
      desktopSrc="/img/home-digi3-container.png"
      mobileSrc="/img/digi3.png"
      alt="AKAAL DIGITAL Services"
      width={1200}
      height={600}
      layout="responsive"
      className="responsive-image"
    />
  </div>

  <div className="image-container">
    <ResponsiveImage
      desktopSrc="/img/OurServices_ AKAAL DIGITAL.png"
      mobileSrc="/img/digi4.png"
      alt="AKAAL DIGITAL Services"
      width={1200}
      height={600}
      layout="responsive"
      className="responsive-image"
    />
  </div>

  <div className="image-container">
    <ResponsiveImage
      desktopSrc="/img/OurServices2_ AKAAL DIGITAL.png"
      mobileSrc="/img/digi5.png"
      alt="AKAAL DIGITAL Services"
      width={1200}
      height={600}
      layout="responsive"
      className="responsive-image"
    />
  </div>

  <div className="image-container">
    <ResponsiveImage
      desktopSrc="/img/OurServices3_ AKAAL DIGITAL.png"
      mobileSrc="/img/digi6.png"
      alt="AKAAL DIGITAL Services"
      width={1200}
      height={600}
      layout="responsive"
      className="responsive-image"
    />
  </div>

  <div className="image-container">
    <ResponsiveImage
      desktopSrc="/img/OurServices4_ AKAAL DIGITAL.png"
      mobileSrc="/img/digi7.png"
      alt="AKAAL DIGITAL Services"
      width={1200}
      height={600}
      layout="responsive"
      className="responsive-image"
    />
  </div>
        </section>

        <section className="section-home-contact" data-animate="fadeInUp">
                  <div className="home-contact-container" data-animate="fadeInUp">
                    <div className="home-contact-text-container">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          flexWrap: "nowrap",
                        }}
                      >
                        <div className="home-contact-journey">
                          Start Your Journey With
                        </div>
                        <div className="home-contact-akaal">AKAAL</div>
                      </div>
                      <div className="home-contact-description">
                        Setiap bisnis punya tantangan dan tujuan unik—kami siap
                        mendengarkan dan membantu Anda menemukan solusinya.
                      </div>
                      <div className="home-contact-action">
                        <div className="contact-row">
                          <button className="home-contact-button">
                            Tell Us Your Idea
                          </button>
                          <a
                            href="https://wa.me/6281213957471"
                            className="home-contact-whatsapp"
                          >
                            <span className="home-contact-icon">
                              <Icon path={mdiWhatsapp} size={1.2} />
                            </span>
                            <span className="home-contact-text">+6281213957471</span>
                          </a>
                          <a
                            href="mailto:asiakaryalumina@gmail.com"
                            className="home-contact-email"
                          >
                            <span className="home-contact-icon">
                              <Icon path={mdiEmail} size={1} />
                            </span>
                            <span className="home-contact-text">
                              asiakaryalumina@gmail.com
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
        
                    <div className="home-contact-logo-container">
                      <Image
                        src="/img/icon-white-big.png"
                        alt="Akaal Logo"
                        fill
                        priority
                        className="home-contact-logo"
                        style={{ marginTop: "-110px" }}
                      />
                    </div>
                  </div>
                </section>
        <section className="section4" data-animate="fadeInUp">
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
                  <p>
                    Dukungan berbagai metode pembayaran yang aman dan efisien
                  </p>
                </div>
              </div>
            </div>
            <div className="btn-aksess-wrapper" data-animate="fadeInUp">
              <a href="#aksess" className="btn">
                Jelajah AKSESS
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
