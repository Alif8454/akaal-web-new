'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Logo di kiri */}
        <Link href="/" className="navbar-brand text-white">
          <Image
            src="/img/logo-fullcolor-negative-rgb.png"
            alt="Logo Akaal"
            width={100}
            height={32}
            className="d-inline-block align-text-top"
            priority
          />
        </Link>

        {/* Menu - Tengah pada layar besar */}
        <div className={`custom-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav d-flex gap-4">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About Akaal</Link>
            </li>
            <li className="nav-item">
              <Link href="/service" className="nav-link">Our Services</Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">Portfolio</Link>
            </li>
          </ul>
        </div>

        {/* Tombol Contact di kanan */}
        <div className="contact-btn-container d-none d-lg-block">
          <Link href="/contact" className="custom-button">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
