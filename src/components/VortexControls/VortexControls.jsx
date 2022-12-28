import React from 'react';
import styles from './VortexControls.css';

export default function VortexControls() {
  return (
    <div className={styles.VortexControls}>
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
