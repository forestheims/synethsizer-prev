import Footer from './Footer';
import Header from './Header';
import styles from './Layout.css';
import { Outlet } from 'react-router-dom';
import ToneSong from '../Tone/ToneSong';

export default function Layout() {
  return (
    <>
      <ToneSong />
      <Header />
      <main className={styles.Main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
