import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { addHoverEffect } from '../../utils/hover';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function service() {
  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Sepertinya halaman yang kamu cari tidak ada.</p>
    </div>
  );
}
