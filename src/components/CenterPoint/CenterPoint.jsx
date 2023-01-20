import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import styles from './CenterPoint.css';

export default function Beam(props) {
  const ref = useRef();

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
