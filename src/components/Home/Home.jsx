import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styles from './Home.css';
import { useTheme } from '../../context/themeProvider';

function Dot(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [num, setNum] = useState(1);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  const { theme, setTheme } = useTheme();
  const { modulo, multiplier } = theme;

  useFrame((state, delta) => {
    const { ndex, length } = props;
    setNum((num) => num + delta / 20);
    const x = Math.cos((ndex + 1) * ((2 * Math.PI) / multiplier) + num) * 2;
    const y = Math.sin((ndex + 1) * ((2 * Math.PI) / multiplier) + num) * 2;
    ref.current.position.x = x;
    ref.current.position.y = y;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
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

function Beam(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const [destiny, setDestiny] = useState({});

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    // ref.current.position.x = x;
    // ref.current.position.y = y;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[0.09, 9, 9]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

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
