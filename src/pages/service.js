'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
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
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link'

import { initCarousel } from '../../utils/carousel';
import { addHoverEffect } from '../../utils/hover';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function service() {
  return (
    <>
    <section className="hero-section" id="home">
            <header className="hero-header">
              <div className="hero-content" id="carouselSlides">
                {/* Slide 1 */}
                <div className="slide active">
                  <div className="about-content-image-wrapper">
                    <Image 
                      src="/img/service-content.png" 
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
          {/* Section 4 */}
              <section className="section4">
                <div className="content">
                  <Image src="/img/AksessLogo.png" alt="Aksess Logo"  width={144} 
                          height={37} class="logo" />
          
                  <h2 className="heading">The Ultimate Ticketing Solution for <br/>Seamless Events.</h2>
                  <p className="subheading">
                    Kelola dan jual tiket event dengan lebih mudah, cepat, dan aman dengan AKSESS—platform ticketing inovatif yang dirancang untuk penyelenggara event modern.
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
                        <p>Pantau penjualan, pemesanan, dan check-in dalam satu tempat</p>
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
                    <a href="#aksess" className="btn">Jelajah AKSESS</a>
                  </div>
                </div>
              </section>
          
              {/* Section5 */}
                <section className="section5">
                  <div className="section5-container">
                    <div className="section5-title-desc">
                      <p className="section5-desc">
                        Kami telah berkolaborasi dengan berbagai brand, menghadirkan solusi digital
                        yang memperkuat identitas dan memperluas jangkauan mereka.
                      </p>
                      <h2 className="section5-title">
                        Our Latest <span>Projects.</span>
                      </h2>
                    </div>
                    <div className="card-grid">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="project-card">
                          <div className="card-image">
                            <Image src="/img/image-11.png" width={632} height={400} alt="Project" />
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
                  <Image src="/img/TitleClient.png" width={1110} height={35} alt="lines"/>
                    <div className="clients-carousel">
                      <button className="carousel-arrow">&#8592;</button>
                      
                      <div className="clients-logos">
                        <Image src="/img/hei.png" width={134} height={53} alt="Client 1" />
                        <Image src="/img/bsi.png" width={134} height={53} alt="Client 2" />
                        <Image src="/img/ikram.png" width={134} height={53} alt="Client 3" />
                        <Image src="/img/hijrahfest.png" width={134} height={53} alt="Client 4" />
                        <Image src="/img/laukstory.png" width={134} height={53} alt="Client 5" />
                        <Image src="/img/ocula.png" alt="Client 6" width={134} height={53} />
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
