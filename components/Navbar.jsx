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
      <div className="container-fluid">
        <button
          className="navbar-toggler text-white"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon path={isMenuOpen ? mdiClose : mdiMenu} size={1} />
        </button>

        <Link href="/" className="navbar-brand text-white order-lg-1 mx-lg-auto">
          <Image
            src="/img/logo-fullcolor-negative-rgb.png"
            alt="Logo Akaal"
            width={100}
            height={32}
            className="d-inline-block align-text-top"
            priority
          />
        </Link>

        <div className={`custom-collapse order-lg-2 ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
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
      </div>

      <div className="contact-btn-container d-none d-lg-block">
        <Link href="/contact" className="custom-button">Contact</Link>
      </div>
    </nav>
  );
}
