import Head from "next/head";
import Image from "next/image";
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { addHoverEffect } from '../../utils/hover';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  useEffect(() => {
    addHoverEffect();
  }, []);

  return (
    <>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <header className="hero-header">
          <div className="hero-content" id="carouselSlides">
            {/* Slide 1 */}
            <div className="slide active">
              <div className="about-content-image-wrapper">
                <Image 
                  src="/img/about-content.png" 
                  alt="Deskripsi Gambar" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </header> 
        <div className="hero-navigation" >
          <Image
            src="/img/Arrow-down.png"
            alt="Arrow Down"
            width={40}
            height={40}
            className="arrow-icon"
            id="about"
          />
        </div>
      </section>

      {/* About AKAAL Section */}
      <section className="about-akaal-section" id="about">
          <div className="text-container">
            <div className="left-text">
              <h5>About AKAAL</h5>
              <h2>
                Be the Game Changer with <span>One Stop Digi-Solution</span>,<br />
                driving innovation and <span>transformation</span>.
              </h2>
            </div>
            <div className="right-text">
              <p>
                Kami adalah mitra inovatif yang siap membawa bisnis Anda ke era digital dengan teknologi mutakhir. 
                Berbasis di Jakarta, Akaal menghadirkan solusi terbaik dalam digital marketing, branding kreatif, 
                IT solutions, dan AI automation yang dirancang khusus untuk memenuhi kebutuhan unik setiap klien. 
                Sebagai partner strategis, kami berkomitmen untuk mendorong kesuksesan digital Anda melalui keahlian, 
                kreativitas, dan teknologi terbaru.
              </p>
            </div>
          </div>

          <div className="image-wrapper">
            <Image
              src="/img/light-2.png"
              alt="About Illustration"
              width={1200}
              height={500}
              className="about-image"
            />
          </div>
       </section>


    </>
  );
}
