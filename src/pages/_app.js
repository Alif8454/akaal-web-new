import { createContext, useState } from 'react';
import Layout from './layout';
import { addHoverEffect } from '../../utils/hover';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export { AppContext };
