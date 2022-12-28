import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styles from './Dot.css';
import { useTheme } from '../../context/themeProvider';

export default function Dot(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [num, setNum] = useState(0);

  const { theme, setTheme } = useTheme();
  const { modulo, multiplier } = theme;

  useFrame((state, delta) => {
    const { ndex, length } = props;
    setNum((num) => num + delta / 20);
    const x = Math.cos((2 * Math.PI * ndex) / multiplier + num) * 2;
    const y = Math.sin((2 * Math.PI * ndex) / multiplier + num) * 2;
    const z = Math.sin(num * ndex);
    ref.current.position.x = x;
    ref.current.position.y = y;
    ref.current.position.z = z;
  });

  return (
    <mesh
      className={styles.Dot}
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={(event) => console.log('event.target', ref.current.position)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[0.09, 9, 9]} />
      <meshStandardMaterial color={hovered ? 'yellowgreen' : 'orange'} />
    </mesh>
  );
}
