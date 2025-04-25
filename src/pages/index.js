import React from "react";
import Head from "next/head";
import Image from "next/image";
import '../styles/style.css'; // dari _app.js

const Layout = ({ children }) => {
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

          <a
            className="navbar-brand text-white order-lg-1 mx-lg-auto"
            href="#"
          >
            <Image
              src="/img/icon-gradientbg-rgb.png"
              alt="Logo"
              width={24}
              height={24}
              className="d-inline-block align-text-top"
            />
            Akaal
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
          <button><span className="text">Contact Us</span></button>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-container">
          {/* Kolom 1 */}
          <div className="footer-column">
            <Image
              src="/img/logo-fullcolor-negative-rgb.svg"
              alt="Akaal"
              width={100}
              height={50}
              className="footer-logo"
            />
            <p>PT. Asia Karya Lumina</p>
            <p>
              Jl. Gotong Royong | No.56 Rt.004/01, RT.3/RW.1,<br />
              Ragunan, Ps. Minggu, Kota Jakarta Selatan,<br />
              Daerah Khusus Ibukota Jakarta 12550
            </p>
            <p>📞 081213957471</p>
            <p>📧 asiakaryalumina@gmail.com</p>
          </div>

          {/* Kolom 2 */}
          <div className="footer-column">
            <h4>Asia Karya Lumina</h4>
            <ul>
              <li><a href="#">About AKAAL</a></li>
              <li><a href="#">Our Services</a></li>
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
    </>
  );
};

export default Layout;
