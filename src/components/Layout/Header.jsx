import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/themeProvider';
import styles from './Layout.css';
import * as Tone from 'tone';

export default function Header() {
  const { theme, setTheme, displayed, prev, next, playPause, reverse } =
    useTheme();
  // const [clicked, setClicked] = useState(false);

  const handleToneClick = async () => {
    // Tone.context.resume();

    await Tone.start();
    window.umami.trackEvent('audio_play_pressed', theme);
    setTheme({ ...theme, toneClicked: !theme.toneClicked });
  };
  const handleNext = () => {
    window.umami.trackEvent('next_pressed', theme);
    next();
  };
  const handlePrev = () => {
    window.umami.trackEvent('prev_pressed', theme);
    prev();
  };

  return (
    <header className={styles.Header}>
      <h1 className={styles.HOne}>Synethsizer | A Visual Synthesizer</h1>
      <div className={styles.DisplaySelect}>
        <button className={styles.Button} onClick={() => handlePrev()}>
          Prev
        </button>
        <h2 className={styles.HTwo}>{displayed}</h2>
        <button className={styles.Button} onClick={handleNext}>
          Next
        </button>
        <button className={styles.Button} onClick={handleToneClick}>
          {theme.toneClicked ? 'Pause' : 'Play'} Audio
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
