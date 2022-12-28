import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/themeProvider';
import styles from './Layout.css';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { displayed } = theme;
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className={styles.Header}>
      <h1 className={styles.HOne}>Math Explore 3D</h1>
      <div className={styles.DisplaySelect}>
        <button className={styles.Button} onClick={handleClick}>
          Prev
        </button>
        <h2 className={styles.HTwo}>{displayed}</h2>
        <button className={styles.Button} onClick={handleClick}>
          Next
        </button>
      </div>
      {clicked && (
        <div className={styles.Construction}>
          <span>
            This is just the beginning. More to explore will be added soon!
          </span>
          <span>- Dec 2022</span>
          <button className={styles.OKButton} onClick={handleClick}>
            OK
          </button>
        </div>
      )}
    </header>
  );
}
