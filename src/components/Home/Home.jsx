import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styles from './Home.css';
import { useTheme } from '../../context/themeProvider';
import CenterPoint from '../CenterPoint/CenterPoint';
import Dot from '../Dot/Dot';
import Controls from '../Controls/Controls';
// import { AxesHelper, GridHelper } from 'three';

export default function Home() {
  const {
    theme: { multiplier },
  } = useTheme();
  const [sphereArray, setSphereArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setSphereArray(Array(multiplier).fill(1));
    setLoading(false);
  }, [multiplier]);

  return (
    <div className={styles.Home}>
      <Controls />
      <Canvas
        camera={{
          position: [0, 0, 6],
        }}
      >
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {!loading &&
          sphereArray.map((n, i, r) => {
            return <Dot key={i} ndex={i} />;
          })}
        <CenterPoint position={[0, 0, -1]} />
        {/* <axesHelper />
        <gridHelper position={[0, 5, 0]} />
        <gridHelper position={[0, -5, 0]} />
        <gridHelper position={[5, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
        <gridHelper position={[-5, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
        <gridHelper position={[0, 0, 5]} rotation={[Math.PI / 2, 0, 0]} />
        <gridHelper position={[0, 0, -5]} rotation={[Math.PI / 2, 0, 0]} /> */}
      </Canvas>
    </div>
  );
}
