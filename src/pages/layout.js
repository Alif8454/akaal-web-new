// components/Layout.js
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { addHoverEffect } from '../../utils/hover';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  useEffect(() => {
    addHoverEffect(); 
  }, []);
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
