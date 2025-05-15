import Head from "next/head";
import Image from "next/image";
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { addHoverEffect } from '../../utils/hover';
import '../styles/style.css';
import '../styles/mobile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '@mdi/react';
import { mdiCheckCircleOutline } from '@mdi/js';
import { mdiAccountHeartOutline } from '@mdi/js';
import { mdiChartLine } from '@mdi/js';
import { mdiReload } from '@mdi/js';
import { mdiTicketConfirmation } from '@mdi/js';
import { mdiViewGridOutline } from '@mdi/js';
import { mdiCreditCardOutline } from '@mdi/js';
import { mdiChevronRight } from '@mdi/js';
import { mdiMenu, mdiClose } from '@mdi/js';

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

      {/* Vision */}
      <div className="vision-mission-container"> 
        <div className="mission-header">
          <h2>Vision</h2>
          <p>
          Membangun ekosistem digital yang kolaboratif, terintegrasi, dan inovatif untuk menciptakan dampak positif yang lebih luas.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="vision-mission-container">
        <div className="mission-section">
          <div className="mission-header">
            <h2>Mission</h2>
            <p>
              Kami berkomitmen untuk menghadirkan solusi digital inovatif, membangun kemitraan strategis,
              dan mendorong bisnis melalui teknologi dan kreativitas.
            </p>
          </div>

          <div className="mission-grid">
            <div className="mission-card">
              <h3>01</h3>
              <h4>Menciptakan Solusi Digital Adaptif</h4>
              <p>Mengembangkan teknologi yang selaras dengan kebutuhan bisnis, industri, dan komunitas.</p>
            </div>
            <div className="mission-card">
              <h3>02</h3>
              <h4>Membangun Kemitraan Jangka Panjang</h4>
              <p>Memberikan layanan terbaik untuk menciptakan hubungan bisnis yang berkelanjutan.</p>
            </div>
            <div className="mission-card">
              <h3>03</h3>
              <h4>Menjadi Mitra Strategis</h4>
              <p>Memimpin transformasi digital untuk meningkatkan produktivitas dan daya saing bisnis.</p>
            </div>
            <div className="mission-card">
              <h3>04</h3>
              <h4>Berinovasi untuk Dampak Sosial</h4>
              <p>Mengembangkan aplikasi yang mendukung pertumbuhan wirausaha dan mengatasi tantangan sosial.</p>
            </div>
            <div className="mission-card">
              <h3>05</h3>
              <h4>Mengintegrasikan Penjualan & Pemasaran</h4>
              <p>Mengoptimalkan strategi digital dengan analisis data yang presisi untuk hasil yang lebih efektif.</p>
            </div>
            <div className="mission-image-card"></div>
          </div>
        </div>
      </div>
    </section>

    <section className="about-akaal-section" id="about">
      <div className="text-container">
        <div className="left-text">
          <h5>Why Choose AKAAL?</h5>
          <h2>
             Bringing Vision to Life,<br />Delivering Solutions.
          </h2>
        </div>
        <div className="right-text">
          <p>
          Kami membangun kepercayaan dan memperkuat identitas. Dengan menggabungkan teknologi terkini dan inovasi kreatif, kami meningkatkan efektivitas serta jangkauan kampanye transformatif. Komitmen kami untuk memahami setiap kebutuhan unik memastikan bahwa setiap solusi yang kami hadirkan memberikan dampak nyata, beresonansi dengan audiens Anda, dan mendorong pertumbuhan yang berkelanjutan.
          </p>
        </div>
      </div>

      <div className="feature-highlight">
      <div className="feature-box">
        <Icon path={mdiCheckCircleOutline} size={1.5} color="#fff" />
        <div className="feature-text">
          <h4>We’re a proven partner</h4>
          <p>lebih dari 100 brand telah sukses berkembang bersama kami</p>
        </div>
      </div>

      <div className="feature-box">
        <Icon path={mdiReload} size={1.5} color="#fff" />
        <div className="feature-text">
          <h4>We Make Their Brand Speak</h4>
          <p>Mengubah brand menjadi suara yang kuat dan berpengaruh.</p>
        </div>
      </div>

      <div className="feature-box">
        <Icon path={mdiAccountHeartOutline} size={1.5} color="#fff" />
        <div className="feature-text">
          <h4>We Create Loyalist</h4>
          <p>Membangun hubungan emosional yang menciptakan pelanggan setia.</p>
        </div>
      </div>

      <div className="feature-box">
        <Icon path={mdiChartLine} size={1.5} color="#fff" />
        <div className="feature-text">
          <h4>We Increase Value</h4>
          <p>Mengoptimalkan strategi untuk meningkatkan daya saing dan nilai.</p>
        </div>
      </div>
    </div>
    </section>


    </>
  );
}
