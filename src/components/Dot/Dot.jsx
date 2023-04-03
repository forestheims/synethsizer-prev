import { useEffect, useRef, useState } from 'react';
import { useFrame, render } from '@react-three/fiber';
import * as THREE from 'three';
import styles from './Dot.css';
import { useTheme } from '../../context/themeProvider';
// import * as Tone from 'tone';

export default function Dot(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // const [triggerTone, setTriggerTone] = useState(false);
  const [color, setColor] = useState('orange');

  const { theme, num, setNum, playing, forward, playPause } = useTheme();
  const { multiplier, toneClicked, themeX, themeY, themeZ, inverseSpeed } =
    theme;
  //   const synth = toneClicked ? new Tone.MembraneSynth().toDestination() : null;

  //   function playNote() {
  //     const now = Tone.now();
  //     triggerTone ? synth.triggerAttack('C4', now) : synth.triggerRelease(now);
  //   }

  //   function releaseNote() {
  //     const now = Tone.now();
  //     synth.releaseAttack(now);
  //   }

  //   useEffect(() => {
  //     if (toneClicked) {
  //       playNote();
  //     }
  //   }, [triggerTone]);

  useFrame((state, delta) => {
    const { ndex, length } = props;
    setNum((num) =>
      forward
        ? num + (playing ? delta : 0) / inverseSpeed
        : num - (playing ? delta : 0) / inverseSpeed
    );
    console.log('num, forward, playing', num, forward, playing);
    const x = themeX(ndex, multiplier, num);
    const y = themeY(ndex, multiplier, num);
    const z = themeZ(ndex, multiplier, num);
    // console.log('ndex', ndex);
    // if (z >= 0.95 && ndex === 66) {
    //   setTriggerTone(true);
    // }

    // z >= 0.95 && ndex === 66 ? setTriggerTone(true) : setTriggerTone(false);
    // if (z > 0.95 && z < 0.95024 && ndex === 1 && !triggerTone) {
    //   setTriggerTone(true);
    // } else if (z > 0.95 && z < 0.95024 && triggerTone) {
    //   setTriggerTone(false);
    // }
    // if (ndex === 1) console.log('z :>> ', triggerTone, z);

    const piValue = Math.PI;
    let r = x * 192 + 128;
    if (r > 255) r = 255;
    if (r < 0) r = 0;
    // const r = sin(a) * 192 + 128;
    // r=max(0,min(255,y))
    let g = z * 192 + 128;
    if (g > 255) g = 255;
    if (g < 0) g = 0;
    // const g = sin(a - (2 * piValue) / 3) * 192 + 128;
    // g=max(0,min(255,y))
    let b = y * 192 + 128;
    if (b > 255) b = 255;
    if (b < 0) b = 0;
    // const b = sin(a - (4 * piValue) / 3) * 192 + 128;
    // b=max(0,min(255,y))
    setColor(`rgb(${r},${g},${b})`);

    ref.current.position.x = x;
    ref.current.position.y = y;
    ref.current.position.z = z;
    THREE.Cache.clear();
  });

  // function ColorMe(n, m) {
  //   // return (((((0xFF << 8) || r) << 8) || g) << 8) || b
  //   return `rgb(${r},${g},${b})`;
  // }

  return (
    <>
      <mesh
        className={styles.Dot}
        {...props}
        ref={ref}
        scale={clicked ? 2 : 1}
        onClick={(event) => void click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <sphereGeometry args={[0.09, 9, 9]} />
        {/* <meshStandardMaterial color={'rgb(122,80,187)'} /> */}
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
}
