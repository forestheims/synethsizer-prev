import React from 'react';
import { useTheme } from '../../context/themeProvider';
import styles from './Controls.css';

export default function Controls() {
  const { theme, setTheme } = useTheme();
  const { multiplier } = theme;
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
    </div>
  );
}
