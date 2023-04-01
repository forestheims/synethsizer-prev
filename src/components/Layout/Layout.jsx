import Footer from './Footer';
import Header from './Header';
import styles from './Layout.css';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles.Main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
