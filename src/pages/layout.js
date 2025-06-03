// components/Layout.js
'use client';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Mobile from '../../components/Mobile';
import Footer from '../../components/Footer';
import { addHoverEffect } from '../../utils/hover';
import '../styles/style.css';
import '../styles/mobile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    addHoverEffect();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set on first load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <Mobile /> : <Navbar />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
