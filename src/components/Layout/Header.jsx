import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/themeProvider';
import styles from './Layout.css';
import * as Tone from 'tone';

export default function Header() {
  const { theme, setTheme, displayed, prev, next } = useTheme();
  // const [clicked, setClicked] = useState(false);

  const handleToneClick = async () => {
    // Tone.context.resume();

    await Tone.start();
    console.log('click');
    setTheme({ ...theme, toneClicked: !theme.toneClicked });
  };

  return (
    <header className={styles.Header}>
      <h1 className={styles.HOne}>Synethsizer</h1>
      <div className={styles.DisplaySelect}>
        <button className={styles.Button} onClick={prev}>
          Prev
        </button>
        <h2 className={styles.HTwo}>{displayed}</h2>
        <button className={styles.Button} onClick={next}>
          Next
        </button>
        <button className={styles.Button} onClick={handleToneClick}>
          Audio {theme.toneClicked ? 'On' : 'Off'}
        </button>
      </div>
      {/* {clicked && (
        <div className={styles.Construction}>
          <span>
            This is just the beginning. More to explore will be added soon!
          </span>
          <span>- Dec 2022</span>
          <button className={styles.OKButton} onClick={handleClick}>
            OK
          </button>
        </div>
      )} */}
    </header>
  );
}
