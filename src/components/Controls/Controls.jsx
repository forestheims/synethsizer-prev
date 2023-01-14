import React from 'react';
import styles from './Controls.css';

export default function Controls() {
  return (
    <div className={styles.Controls}>
      <label htmlFor="modulo">
        Modulo
        <input
          type="number"
          id="modulo"
          value={modulo}
          min={1}
          onChange={(e) => setTheme({ ...theme, modulo: +e.target.value })}
        />
      </label>
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
