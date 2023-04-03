import React from 'react';
import { useTheme } from '../../context/themeProvider';
import styles from './Controls.css';
import { Stats } from '@react-three/drei';

export default function Controls() {
  const { theme, setTheme, playing, forward, playPause, reverse } = useTheme();
  const { multiplier, glowing, trailing, inverseSpeed } = theme;

  const resetCamera = () => {};
  const clickPlayPause = () => {
    playPause();
    umami.trackEvent('play_pause_pressed', theme);
  };
  const clickReverse = () => {
    reverse();
    umami.trackEvent('reverse_pressed', theme);
  };
  const changeMultiplier = (e) => {
    setTheme({ ...theme, multiplier: +e.target.value });
  };
  const changeSpeed = (e) => {
    setTheme({ ...theme, inverseSpeed: +e.target.value });
  };

  return (
    <div className={styles.Controls}>
      {/* <Stats showPanel={2} /> */}
      <button
        className={styles.ControlButton}
        id="play"
        value={glowing}
        onClick={clickPlayPause}
      >
        {playing ? 'Pause' : 'Play'}
      </button>

      <button
        className={styles.ControlButton}
        id="reverse"
        value={forward}
        onClick={clickReverse}
      >
        {forward ? 'Reverse' : 'Forward'}
      </button>

      <label htmlFor="multiplier">
        Multiplier:
        <input
          type="range"
          id="multiplier"
          value={multiplier}
          min={1}
          max={99}
          onChange={(e) => changeMultiplier(e)}
        />
        {multiplier}
      </label>
      <label htmlFor="speed">
        Inverse Speed:
        <input
          type="range"
          id="speed"
          value={inverseSpeed}
          min={1}
          max={2500}
          onChange={(e) => changeSpeed(e)}
        />
        {inverseSpeed}
      </label>
      {/* <label htmlFor="glow">
        Glow
        <input
          type="range"
          id="glow"
          value={glowing}
          onChange={(e) => setTheme({ ...theme, glowing: +e.target.value })}
        />
      </label>
      <label htmlFor="trail">
        Trail
        <input
          type="range"
          id="trail"
          value={trailing}
          onChange={(e) => setTheme({ ...theme, trailing: +e.target.value })}
        />
      </label> */}
      {/* <button
        className={styles.ControlButton}
        id="reset"
        value={forward}
        onClick={resetCamera}
      >
        Reset Camera
      </button> */}
    </div>
  );
}
