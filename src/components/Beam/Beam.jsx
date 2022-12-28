import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styles from './Beam.css';
import { useTheme } from '../../context/themeProvider';

export default function Beam(props) {
  const ref = useRef();

  const [destiny, setDestiny] = useState({});

  const { theme, setTheme } = useTheme();
  const { modulo, multiplier } = theme;

  useFrame((state, delta) => {
    ref.current.position.x = 0;
    ref.current.position.y = 0;
    ref.current.position.z = 0;
  });

  return (
    <mesh className={styles.Beam} {...props} ref={ref}>
      <sphereGeometry args={[0.09, 9, 9]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
