import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/themeProvider';
import styles from './Layout.css';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { modulo, multiplier } = theme;
  return (
    <header className={styles.Header}>
      <h1 className={styles.HOne}>Vortex Math 3D</h1>
      <div className={styles.Inputs}>
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
            onChange={(e) =>
              setTheme({ ...theme, multiplier: +e.target.value })
            }
          />
        </label>
      </div>
    </header>
  );
}
