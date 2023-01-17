import React from 'react';
import { useTheme } from '../../context/themeProvider';
import styles from './Controls.css';

export default function Controls() {
  const { theme, setTheme } = useTheme();
  const { multiplier, glowing, trailing } = theme;
  return (
    <div className={styles.Controls}>
      <label htmlFor="multiplier">
        Multiplier
        <input
          type="number"
          id="multiplier"
          value={multiplier}
          min={1}
          onChange={(e) => setTheme({ ...theme, multiplier: +e.target.value })}
        />
      </label>
      <label htmlFor="glow">
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
      </label>
    </div>
  );
}
