"use client";

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
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    if (typeof window !== "undefined") {
      initCarousel();
    }

    const fetchCards = async () => {
      const { data, error } = await supabase
        .from("portofolio")
        .select("id, image_1, client_name, judul, slug");

      if (error) {
        console.error("Fetch error:", error);
      } else {
        console.log("Data dari Supabase:", data);
        setCards(data);
      }
    };

    fetchCards();

    return () => clearTimeout(timer);
  }, []);
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
                    src="/img/turning-ideas.png"
                    alt="Deskripsi Gambar"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="hero-navigation">
            <a href="#card">
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
        <section className="section2"  data-animate="fadeInUp">
          <h2 className="section-title" id="card">Our Latest Projects</h2>
          <p className="section-desc">
            Kami telah berkolaborasi dengan berbagai brand, menghadirkan solusi
            digital yang memperkuat identitas dan memperluas jangkauan mereka.
          </p>
        </section>
        <section className="section5">
          <div className="section5-container"  data-animate="fadeInUp">
            <div className="card-grid" >
              {cards.length > 0 ? (
                cards.map((card) => <ProjectCard key={card.id} data={card} />)
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
