import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styles from './Home.css';
import { useTheme } from '../../context/themeProvider';
import Beam from '../Beam/Beam';
import Dot from '../Dot/Dot';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { modulo, multiplier } = theme;
  const [sphereArray, setSphereArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setSphereArray(Array(multiplier).fill(1));
    setLoading(false);
  }, [multiplier]);

  return (
    <div className={styles.Home}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {!loading &&
          sphereArray.map((n, i, r) => {
            return <Dot key={i} ndex={i} />;
          })}

        <Beam position={[0, 0, -1]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
