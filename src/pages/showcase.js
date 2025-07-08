"use client";
import useClientSide from '/../../hooks/useClientSide'

// CSS Imports
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


// Component Imports
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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

export default function Showcase() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const isClient = useClientSide()

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   initCarousel();
    // }

     const fetchCards = async () => {
      const { data, error } = await supabase
        .from("portofolio")
        .select("id, image_1, client_name, judul, slug")
      
      if (!error) setCards(data)
    }

    fetchCards()
  }, [])

  useEffect(() => {
    if (isClient) {
      initCarousel()
      return () => cleanupCarousel() 
    }
  }, [isClient]);
  return (
    <>
      <div className="showcase-container">
        <div className="showcase-title">
            <div className="showcase-left">
              <div className="AKAAL-agency">
                AKAAL
                <br />
                Agency
              </div>

              <div className="rectangle"></div>

              <div className="showcase-info">
                <div className="client-name">PT. XYZ</div>
                <div className="service-type">Social Media and Branding</div>
              </div>
            </div>

          <Link href="/showcase" class="showcase-button">
            <div className="button-text">Showcase</div>
          </Link>
        </div>

        <div className="showcase-subtitle">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="image-section">
        <div className="image-wrapper">
          <img className="img" alt="Image" src="/img/purple-big.png" />
        </div>

        <div className="image-wrapper">
          <img className="img" alt="Image" src="/img/purple-big.png" />
        </div>

        <div className="image-wrapper">
          <img className="img" alt="Image" src="/img/purple-big.png" />
        </div>
        <section className="section-home-contact">
          <div className="home-contact-container">
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

            <div className="other-left">
              <h3>Other Projects</h3>
            </div>
            <div className="card-grid">
              {cards.length > 0 ? (
                cards.slice(0, 3).map((card) => <ProjectCard key={card.id} data={card} />)
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </section>
        <section className="section-home-contact">
          <Link href="/showcase" className="btn btn-primary">
            Back to Showcase
          </Link>
        </section>
      </div>
    </>
  );
}
