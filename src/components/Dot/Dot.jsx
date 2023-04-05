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
  const [dotColor, setDotColor] = useState('black');

  const { theme, num, setNum, playing, forward, playPause, color, setColor } =
    useTheme();
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
    // console.log('num, forward, playing', num, forward, playing);
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

    let r;
    let g;
    let b;

    if (color === 'orange') {
      if (dotColor !== 'orange') {
        setDotColor('orange');
      }
    } else if (color === 'rainbow') {
      r = Math.round(z * 128 + 128);
      g = Math.round(z * 128 + (y * 128 + 128));
      b = Math.round(z * 128 + (x * 128 + 128));

      if (r > 255) r = 255;
      if (r < 0) r = 0;
      if (g > 255) g = 255;
      if (g < 0) g = 0;
      if (b > 255) b = 255;
      if (b < 0) b = 0;
      setDotColor(`rgb(${r},${g},${b})`);
    } else if (color === 'trippy') {
      let zy = z * 192 + 128;
      if (zy > 255) setDotColor(`rgb(255,0,0)`);
      if (zy < 0) setDotColor(`rgb(0,0,0)`);
    }

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
        <meshStandardMaterial color={dotColor} />
      </mesh>
    </>
  );
}
